import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUser, getCurrentUser } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/navbar';
import SubnavToggle from '../subnav/subnav';
import { expandCountry, getCountry } from '../../util/location_util';
import {
  formatMonthYear,
  formatLastOnline,
  formatTime,
  formatAbsDate
} from '../../util/date_util';
import {
  toggleSearch
} from '../../util/search_util';
import { TitleComponent } from '../title_component.jsx';
import Calendar from './calendar';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCalendar = this.toggleCalendar.bind(this);
  }

  componentDidMount() {
    toggleSearch();
    // console.log(localStorage.getItem('lastOnline'));
  }

  // componentDidUpdate() {
  //   console.log(this.props.events);
  // }

  toggleCalendar() {
    $('.calendar').toggle();
    $('#calendar-toggle').toggleClass('form');
    $('#overview').toggleClass('form');
    $('.user-main').toggleClass('cal-bg');
    $('.user-subheader-container').toggle();
    $('#overview').on('click', () => {
      $('.calendar').hide();
      $('#overview').addClass('form');
      $('#calendar-toggle').removeClass('form');
      $('.user-main').removeClass('cal-bg');
      $('.user-subheader-container').show();
    });
  }

  render() {
    const { currentUser, events } = this.props;
    const lastOnline = localStorage.getItem('lastOnline');
    return(
      <React.Fragment>
      <TitleComponent title={`DC: ${currentUser.username}`} />
      <div className="user-profile">
        <header>
          <div id="nav-container">
            <NavBar title={currentUser.username}/>
          </div>
        </header>
        <div className="subnav-container">
          <section id="subnav">
            <ul>
              <li className="form" id="overview"><Link to={`/users/${currentUser.id}`}>Overview</Link></li>
                <li id="calendar-toggle" onClick={this.toggleCalendar}><Link to={`/users/${currentUser.id}`}>Calendar</Link></li>
              <li><Link to={`/users/${currentUser.id}/events`}>My Events</Link></li>
              {/* <li><Link to="/">Take me back home</Link></li> */}
            </ul>
          </section>
          {/* <SubnavToggle currentUser={currentUser} toggleCalendar={this.toggleCalendar}/> */}
            <SubnavToggle
              currentUser={currentUser}
              toggleCalendar={this.toggleCalendar}
              title="Overview"
              labels={['My Events']}
              paths={[`/users/${currentUser.id}/events`]} />
        </div>
        <div className="user-subheader-container">
          <section className="user-subheader">
            <ul className="details">
              <li>
                <small>DC since /</small><br />
                {/* {formatDate(currentUser.created_at).split(' ').slice(0, 3).join(' ')} */}
                  {formatMonthYear(currentUser.created_at)}
              </li>
              <li>
                <small>Last online /</small><br/>
                {formatLastOnline(lastOnline)} <small>{formatTime(lastOnline)}</small>
              </li>
              <li>
                <small>Location /</small> <br />
             <strong>{expandCountry[`${currentUser.region}`].flag}</strong>{currentUser.region}
              </li>
            </ul>
          </section>
        </div>
        <div className="user-main">
          <Calendar currentUser={currentUser} events={events}/>
        </div>
      </div>
      </React.Fragment>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    currentUser: getCurrentUser(state),
    events: Object.values(state.entities.events).filter(event => event.hasOwnProperty('user_id')).filter(event => 
      formatAbsDate(event.date).year === new Date().getFullYear() && formatAbsDate(event.date).month === new Date().getMonth()
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId)),
  fetchEvents: () => dispatch(fetchEvents()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);