import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {

    // }
  }

  componentDidMount() {
    // debugger
    this.props.fetchEvent(this.props.match.params.eventId);
  }

  render() {
    const { event } = this.props;

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
          <br/>
            <i class="fas fa-arrow-alt-circle-left"></i>
          <section className="eventshow-header">
            <Link to='/events'><img id="prev" src={window.prevUrl} alt="Back"/> Events</Link>
            <h2>{event.name}</h2>
          </section>
        </div>
        <br/>
        <ul>
          <li>
            <section className="eventshow-subheader">
              <h3>{event.date}</h3> 
              <h3>{event.venue}</h3>
            </section>
          </li>
          <li className="eventshow-details">
            <span>{event.headliners}</span>
            <p>{event.description}</p>
          </li>
        </ul>
      </div>
    )
  }
};

export default EventShow;