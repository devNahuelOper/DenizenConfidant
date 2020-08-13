import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUser, getCurrentUser } from '../../actions/session_actions';
import { fetchEvents, deleteEvent } from '../../actions/event_actions';
import { Link } from 'react-router-dom';
import {
  formatMonthDay,
  formatDateStyle
} from '../../util/date_util';
import { TitleComponent } from '../title_component.jsx';

class UserEvents extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    // this.props.fetchEvents().then(events => this.setState({events: Object.values(events.events)}));
    const search = document.getElementById('search');
    const searchbar = document.getElementsByClassName('search-container')[0];
    search.onclick = function () {
      searchbar.style.display = 'block';
      search.className = 'show-search';
    }
    window.onclick = function (e) {
      let inSearchbar = searchbar.contains(e.target);
      let inSearch = search.contains(e.target);
      if (inSearchbar || inSearch) {
        return;
      }
      searchbar.style.display = 'none';
      search.className = 'hide-search';
    }
  }

  handleDelete(e) {
    e.preventDefault();
    e.target.parentNode.parentNode.parentNode.parentNode.remove();
    window.location.reload(true);
  }


  render() {
    const { currentUser, deleteEvent } = this.props;

    return(
      <React.Fragment>
        <TitleComponent title="DC: My Events" />
        <div className="user-profile" id="user-events">
          <div id="nav-container">
            <section id="navbar">
              <nav>
                <Link to="/"><img src={window.logoUrl} id="logo" /></Link>
                <ul id="links">
                  <li><Link to="/djs">DJs</Link></li>
                  <li><Link to="/events">Events</Link></li>
                  <li><Link to="/genres">Music</Link></li>
                  <li><button id="search">Search</button></li>
                </ul>
              </nav>
              <h1>My Events</h1>
            </section>
          </div>
          <div className="subnav-container">
            <section id="subnav">
              <ul>
                <li><Link to={`/users/${currentUser.id}`}>Overview</Link></li>
                <li className="form"><Link to={`/users/${currentUser.id}/events`}>My Events</Link></li>
                <li><Link to="/">Take me back home</Link></li>
              </ul>
            </section>
            <SubnavToggle currentUser={currentUser}/>
          </div>
          <div className="user-subheader-container">
            <section className="user-subheader">
              <ul className="details">
                <li>
                  <small>Events submitted /</small><br />
                   {currentUser.events.length}
                </li>
                <li>
                  <small>Access level /</small> <br />
                  Standard user
                </li>
              </ul>
            </section>
          </div>
          <div className="my-events">
            <span id="myevents-header">
              <h1>Events under your administration.</h1>
              <Link id="submit-event" to="/events/new">Submit an event</Link>
            </span>
            <section id="myevents-list">
              {currentUser.events.length ? 
              <ul>
                {currentUser.events.map((event, i) => 
                <li key={i} id={event.id || null}>
                  <h1 id="myevent-date">{formatMonthDay(event.created_at)}</h1>
                    <article className="user-event">
                      <span className="myevent-details">
                        <small>{formatDateStyle(event.date).split(' ').slice(0,2).join(' ')} / </small> <strong><Link to={`/events/${event.id}`}>{event.name}</Link></strong> <br />
                        <small>at </small> <strong>{event.venue}</strong>, <strong>{event.location} </strong>
                      </span>
                      <span className="manage-event">
                        <Link to={`/events/${event.id}/edit`}>Event Management</Link>
                        <div onClick={this.handleDelete}>
                        <button id="delete-event" onClick={() => deleteEvent(event.id)}>Cancel Event</button>
                        </div>
                      </span>
                    </article>
                </li>
                  )}
              </ul> : <h1>No events were found.</h1>
              }
            </section>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

class SubnavToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drop: false
    }
    this.clicker = this.clicker.bind(this);
    this.leave = this.leave.bind(this);
  }

  clicker(e) {
    this.setState({ "drop": true });
  }

  leave(e) {
    this.setState({ "drop": false });
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="subnav-toggle" id={this.state.drop ? "expand" : "normal"}>
        <button className="subnav-drop" onFocus={this.clicker} onTap={this.clicker} onBlur={this.leave}> <span>My Events <small>⬇︎</small></span>
          <ul className={this.state.drop ? "reveal" : "hide"}>
            <li><Link className="log-link" to={`/users/${currentUser.id}`}>Overview</Link></li>
            <li id="user-reveal"><Link className="log-link" onClick={this.leave} to="/">Take me back home</Link></li>
          </ul>
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: getCurrentUser(state),
    // events: Object.values(state.entities.events).filter(
    //   event => {event.user_id === currentUser.id}
    // )
    events: Object.values(state.entities.events)
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId)),
  fetchEvents: () => dispatch(fetchEvents()),
  deleteEvent: eventId => dispatch(deleteEvent(eventId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserEvents);