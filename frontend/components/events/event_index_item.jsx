import React from 'react';
import { Link } from 'react-router-dom';
import {
  formatDateStyle
} from '../../util/date_util';


const EventIndexItem = ({ event }) => {
const lineUp = event.headliners.split(',').map(dj => dj.trim());
return (
  <li className="eventlist-item">
   { !event.local &&
   <article className="event">
    <Link id="event-name" to={`events/${event.id}`}>{event.name === 'Sonar' ? 'Sónar' : event.name}</Link>
    <br/>
      <span id="event-date">Date: {formatDateStyle(event.date)}</span>
    <br/>
      <span id="venue">Venue: {event.venue} | {event.location}</span>
      <br/>
      {/* <span id="headliners">Featuring: {event.headliners}</span> */}
      <span id="headliners">Featuring: 
        {lineUp.map((dj, i) => 
          <article key={i}>
            {
            event.get_djs.hasOwnProperty(dj.toLowerCase()) ?
            <Link to={`djs/${event.get_djs[dj.toLowerCase()]}`}> {dj}</Link>
            :
            <b> {dj}</b>
            }
          </article>
        )}
      </span>
      <br/>
      <p id="description">{event.description}</p>
      </article>
      }
      <br/>
  </li>
  )
}

export default EventIndexItem;

{/* <a href={`https://www.${event.venue}.com`}>{event.venue}</a> */}