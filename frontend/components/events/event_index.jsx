import React from 'react';
import { Link } from 'react-router-dom';
import EventIndexItem from './event_index_item';
import NavBar from '../navbar/navbar';
import SubnavToggle from '../subnav/subnav';
import {
  formatDateStyle
} from '../../util/date_util';
import { toggleSearch } from '../../util/search_util';


class EventIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
    console.log(this.props);
    toggleSearch();
  }

  render() {
    const { events } = this.props;

    return (
      <div className="events-index">
        <header>
          <div className="events-nav-container">
          <NavBar 
            title="Events"
            entity="Event"/>
          </div>
        </header>
        <div className="subnav-container">
          <section id="events-subnav">
            <ul>
              <li><Link className="form" to="/events">All</Link></li>
              <li><Link to="/">Take me back home</Link></li>
              <li><Link to='/events/new'>Submit an event</Link></li>
            </ul>
          </section>
          <SubnavToggle 
            title="All"
            labels={["Take me back home", "Submit an event"]}
            paths={["/", "/events/new"]}/>
        </div>
        <div className="local-events-wrap">
          <section className="local-events">
            <h1 id="content-title">Popular events in New York</h1>
            <hr />
            <ul className="eventlist">
              {events.slice(8, 13).map((event, i) => 
                <li className="event" key={event.id}>
                    { event.local &&
                      <article id="local-event">
                      <h2>{formatDateStyle(event.date)}</h2>
                      <img id={`img-${i}`} src={event.photoUrl} alt=""/>
                      <Link to={`/events/${event.id}`}>{event.name}</Link> <br/>
                      <span id="venue">{event.venue} - {event.location}</span>
                    </article>
                    }
                  </li>
              )}
            </ul>
          </section>
        </div>
        <div className="top-events">
         <section>
            <h1 id="content-title">Top Events Worldwide</h1>
            <hr/>
          <ul className="eventlist">
            {events.slice(0, 8).map(event => 
            <EventIndexItem key={event.id} event={event}/>
            )}
          </ul>
         </section>
        </div>
      </div>
    )
  }
};

export default EventIndex;