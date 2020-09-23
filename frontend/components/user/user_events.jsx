import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUser, getCurrentUser } from '../../actions/session_actions';
import { fetchEvents, deleteEvent } from '../../actions/event_actions';
import { openModal } from '../../actions/modal_actions';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';
import NavBar from '../navbar/navbar';
import SubnavToggle from '../subnav/subnav';
import {
  formatMonthYear,
  formatDateStyle
} from '../../util/date_util';
import {
  toggleSearch
} from '../../util/search_util';
import { TitleComponent } from '../title_component.jsx';

class UserEvents extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents();
    toggleSearch();
  }

 

  handleDelete(id) {
    $(`#${id}`).remove();
    window.setTimeout(() => {
      window.location.reload(true);
    }, 1000)
  }

  confirm(id) {
    $(`#confirm-${id}`).toggle();
  }


  render() {
    const { currentUser, deleteEvent } = this.props;

    return(
      <React.Fragment>
        <TitleComponent title="DC: My Events" />
        <div className="user-profile" id="user-events">
          <header>
            <div id="nav-container">
              <NavBar title="My Events"/>
            </div>
          </header>
          <div className="subnav-container">
            <section id="subnav">
              <ul>
                <li><Link to={`/users/${currentUser.id}`}>Overview</Link></li>
                <li className="form"><Link to={`/users/${currentUser.id}/events`}>My Events</Link></li>
                <li><Link to="/">Take me back home</Link></li>
              </ul>
            </section>
            <SubnavToggle
              currentUser={currentUser}
              title="My Events"
              labels={["Overview", "Take me back home"]}
              paths={[`/users/${currentUser.id}`, "/"]} 
              />
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
                  <h1 id="myevent-date">{formatMonthYear(event.created_at)}</h1>
                    <article className="user-event">
                      <span className="myevent-details">
                        <small>{formatDateStyle(event.date).split(' ').slice(0,2).join(' ')} / </small> <strong><Link to={`/events/${event.id}`}>{event.name}</Link></strong> <br />
                        <small>at </small> <strong>{event.venue}</strong>, <strong>{event.location} </strong>
                      </span>
                      <span className="manage-event">
                        <Link to={`/events/${event.id}/edit`}>Event Management</Link>
                        <div>
                          <button id="delete-event" onClick={() => this.confirm(event.id)}>Cancel Event</button>
                        </div>
                      </span>
                    </article>
                    <div className="confirm" id={`confirm-${event.id}`}>
                      <h1>Are you sure you want to cancel this event?</h1>
                      <span>
                        <button onClick={() => this.handleDelete(event.id)} onMouseUp={() => deleteEvent(event.id)}>Yes</button>
                        <button onClick={() => this.confirm(event.id)}>No</button>
                      </span>
                    </div>
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



const mapStateToProps = (state) => {
  return {
    currentUser: getCurrentUser(state),
    events: Object.values(state.entities.events).filter(event => event.hasOwnProperty('user_id'))
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId)),
  fetchEvents: () => dispatch(fetchEvents()),
  openModal: modal => dispatch(openModal(modal)),
  deleteEvent: eventId => dispatch(deleteEvent(eventId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserEvents);