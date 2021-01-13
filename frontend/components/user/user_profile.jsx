import React from "react";
import { connect } from "react-redux";
import {
  fetchCurrentUser,
  getCurrentUser,
} from "../../actions/session_actions";
import { fetchEvents } from "../../actions/event_actions";
import { Link } from "react-router-dom";
import NavBar from "../navbar/navbar";
import SubnavToggle from "../subnav/subnav";
import { expandCountry } from "../../util/location_util";
import {
  formatMonthYear,
  formatLastOnline,
  formatTime,
} from "../../util/date_util";
import { activateCalendar } from "../../util/calendar_util";
import { toggleSearch } from "../../util/search_util";
import { TitleComponent } from "../title_component.jsx";
import Calendar from "./calendar";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events,
    };
    this.toggleCalendar = this.toggleCalendar.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents();
    toggleSearch();
    // console.log('user events: ',this.props.events);
  }

  toggleCalendar() {
    activateCalendar();
  }

  render() {
    const { currentUser, events } = this.props;
    const lastOnline = localStorage.getItem("lastOnline") || new Date();
    return (
      <React.Fragment>
        <TitleComponent title={`DC: ${currentUser.username}`} />
        <div className="user-profile">
          <header>
            <div id="nav-container">
              <NavBar title={currentUser.username} entity="User" />
            </div>
          </header>
          <div className="subnav-container">
            <section id="subnav">
              <ul>
                <li className="form" id="overview">
                  <Link to={`/users/${currentUser.id}`}>Overview</Link>
                </li>
                <li id="calendar-toggle" onClick={this.toggleCalendar}>
                  <Link to={`/users/${currentUser.id}`}>Calendar</Link>
                </li>
                <li>
                  <Link to={`/users/${currentUser.id}/events`}>My Events</Link>
                </li>
              </ul>
            </section>
            <SubnavToggle
              currentUser={currentUser}
              toggleCalendar={this.toggleCalendar}
              title="Overview"
              labels={["My Events"]}
              paths={[`/users/${currentUser.id}/events`]}
            />
          </div>
          <div className="user-subheader-container">
            <section className="user-subheader">
              <ul className="details">
                <li>
                  <small>DC since /</small>
                  <br />
                  {formatMonthYear(currentUser.created_at)}
                </li>
                <li>
                  <small>Last online /</small>
                  <br />
                  {formatLastOnline(lastOnline)}{" "}
                  <small>{formatTime(lastOnline)}</small>
                </li>
                <li>
                  <small>Location /</small> <br />
                  <strong>{expandCountry[`${currentUser.region}`].flag}</strong>
                  {currentUser.region}
                </li>
              </ul>
            </section>
          </div>
          <div className="user-main">
            <Calendar
              currentUser={currentUser}
              events={events.filter(
                (event) => event.user_id === currentUser.id
              )}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: getCurrentUser(state),
    events: Object.values(state.entities.events).filter((event) =>
      event.hasOwnProperty("user_id")
    ),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId)),
  fetchEvents: (events) => dispatch(fetchEvents(events)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
