import React from 'react';
import { Link } from 'react-router-dom';
import EventIndexItem from './event_index_item';



class EventIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const { events } = this.props;

    return (
      <div className="events-index">
        <div className="events-nav-container">
        <Link to="/"><img src={window.logoUrl} id="logo" /></Link>
          <ul id="links">
            <li>DJs</li>
            <li><Link to="/events">Events</Link></li>
            <li>Music</li>
            <li>Search</li>
          </ul>
          <h1>Events</h1>
        </div>
        {/* <div> */}
          <section id="events-subnav">
            <ul>
            <li><Link className="form" style={{ color: 'black' }} to="/events">All</Link></li>
              <li><Link to="/signup">Register</Link></li>
              <li><Link to="/">Take me back home</Link></li>
            <li><Link to='/events/:id'>Submit an event</Link></li>
            </ul>
          </section>
          <div className="top-events">
            <h1 id="content-title">Top Events Worldwide</h1>
        <ul className="eventlist">
          {events.map(event => 
          <EventIndexItem key={event.id} event={event}/>
            )}
        </ul>
          </div>
      </div>
    )
  }
};

export default EventIndex;