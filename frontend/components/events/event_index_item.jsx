import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = ({ event, deleteEvent}) => (
  <li>
    <Link to={`/events/${event.id}`}>{event.name}</Link>
      <span>{event.venue} - {event.location}</span>
      <span>{event.headliners}</span>
    <Link to={`/events/${event.id}/edit`}>Edit</Link>
    <button onClick={() => deleteEvent(event.id)}>Cancel Event</button>
  </li>
)

export default EventIndexItem;