import React from 'react';
import { Link } from 'react-router-dom';
import EventIndexItem from './event_index_item';
import NavBar from '../navbar/navbar';
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
    toggleSearch();
  }

  render() {
    const { events } = this.props;

    return (
      <div className="events-index">
        <header>
          <div className="events-nav-container">
          <section className="events-nav">
            <nav>
              <Link to="/"><img src={window.logoUrl} id="logo" /></Link>
              <ul id="links">
                <li><Link to="/djs">DJs</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/genres">Music</Link></li>
                <li><button id="search">Search</button></li>
              </ul>
            </nav>
            <h1>Events</h1>
          </section>
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
          <SubnavToggle />
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


class SubnavToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drop: false
    }
    this.clicker = this.clicker.bind(this);
    this.leave = this.leave.bind(this);
    this.mobileDrop = this.mobileDrop.bind(this);
  }

  clicker(e) {
    this.setState({ "drop": true });
  }

  leave(e) {
    this.setState({ "drop": false });
  }

  
  mobileDrop(e) {
    e.preventDefault();
    this.setState({ "drop": true }); status
    $('body').on('click', e => {
      const drop = $('.subnav-drop');
      if (drop !== e.currentTarget) {
        this.leave();
      }
    });
  }

  // onBlur = { this.leave }
  render() {
    return (
      <div className="subnav-toggle" id={this.state.drop ? "expand" : "normal"}>
        <button className="subnav-drop" onFocus={this.clicker} onBlur={this.leave}> <span onClick={this.mobileDrop}>All <small>⬇︎</small></span>
          <ul className={this.state.drop ? "reveal" : "hide"}>
            <li><Link className="log-link" onClick={this.leave} to="/">Take me back home</Link></li>
            <li><Link className="log-link" to='/events/new'>Submit an event</Link></li>
          </ul>
        </button>
      </div>
    )
  }
}

export default EventIndex;