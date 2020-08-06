import React from 'react';
import { Link } from 'react-router-dom';



const EventIndexItem = ({ event, deleteEvent}) => (
 
  <li className="eventlist-item">
    <article className="event">
    <Link id="event-name" to={`events/${event.id}`}>{event.name === 'Sonar' ? 'Sónar' : event.name}</Link>
    <br/>
      <span id="event-date">Date: {event.date}</span>
    <br/>
      <span id="venue">Venue: {event.venue} | {event.location}</span>
      <br/>
      <span id="headliners">Featuring: {event.headliners}</span>
      {/* <span id="headliners">Featuring: {
      event.headliners.split(', ').map(headliner => {
      <article headliner={headliner}>{headliner}</article>
      })
      }
      </span> */}
      <br/>
      <p id="description">{event.description}</p>

      {/* <img id="event-img" src={event.photoUrl}/> */}

      </article>
      <br/>
    {/* <Link to={`/events/${event.id}/edit`}>Edit</Link> */}
    {/* <button onClick={() => deleteEvent(event.id)}>Cancel Event</button> */}
  </li>
)

export default EventIndexItem;

{/* <a href={`https://www.${event.venue}.com`}>{event.venue}</a> */}