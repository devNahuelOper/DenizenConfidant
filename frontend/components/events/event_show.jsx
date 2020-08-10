import React from 'react';
import { Link } from 'react-router-dom';
import { TitleComponent } from '../title_component.jsx';
import {
  formatDateShowStyle
} from '../../util/date_util';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {

    // }
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);
  }

  componentDidUpdate() {
    const search = document.getElementById('search');
    const searchbar = document.getElementsByClassName('search-container')[0];
    search.onclick = function () {
      searchbar.style.display = 'block';
      search.style.backgroundColor = 'white';
      search.style.color = 'black';
      search.style.borderBottom = '2px solid white';
    }
    window.onclick = function (e) {
      let inSearchbar = searchbar.contains(e.target);
      let inSearch = search.contains(e.target);
      if (inSearchbar || inSearch) {
        return;
      }
      searchbar.style.display = 'none';
      search.style.backgroundColor = 'transparent';
      search.style.color = 'currentColor';
      search.style.borderBottom = 'unset';
    }
  }

  render() {
    if (!this.props.event) {
      return null;
    }
    const { event } = this.props;

    return (
      <React.Fragment>
        <TitleComponent title={`DC: ${event.name}`} />
      <div className="events-index">
        <div className="eventshow-nav-container">
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
          {/* <br/> */}
          <section className="eventshow-header">
            <Link to='/events'><img id="prev" src={window.prevUrl} alt="Back"/> Events</Link>
            <h2>{event.name}</h2>
          </section>
        </section>
        </div>
          <div className="subnav-container">
            <section id="events-subnav">
              <ul>
                <li><Link className="form" to="/events">All</Link></li>
                {/* <li><Link to="/signup">Register</Link></li> */}
                <li><Link to="/">Take me back home</Link></li>
                <li><Link to='/events/new'>Submit an event <br /> <small>Coming Soon!</small></Link></li>
              </ul>
            </section>
            <SubnavToggle />
          </div>
        <br/>
        <div className="subheader-container">
          <section className="eventshow-subheader">
            <ul className="details">
              <li id="event-date">Date/ 
                <h4>{formatDateShowStyle(event.date).split(' ')[0]}</h4> 
                <h3>{formatDateShowStyle(event.date).split(' ').slice(1).join(' ')}</h3> 
              </li>
              <li>Venue/ 
                <h3>{event.venue}</h3>
                <h4>{event.location}</h4>
              </li>
              <li>Cost/ 
              <h4>{event.cost}</h4>
              </li>
            </ul> 
          </section>
        </div>
        <div className="main-container">
          <section className="eventshow-main">
            <span id="headliners"><small>Line-up/</small> <br/> {event.headliners}</span>
            <br/>
            <p id="description">{event.description}</p>
            <br/>
            <img id="event-image" src={event.photoUrl} alt=""/>
            {/* <img id="event-image" src={`https://denizen-confidant-dev.s3.amazonaws.com/${event.name.toLowerCase().split(' ').join('')}.png`}/> */}
          </section>          
        </div>
      </div>
      </React.Fragment>
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
  }

  clicker(e) {
    this.setState({ "drop": true });
  }

  leave(e) {
    this.setState({ "drop": false });
  }
  // onBlur = { this.leave }
  render() {
    return (
      <div className="subnav-toggle" id={this.state.drop ? "expand" : "normal"}>
        <button className="subnav-drop" onFocus={this.clicker} onBlur={this.leave}> <span>All <small>⬇︎</small></span>
          <ul className={this.state.drop ? "reveal" : "hide"}>
            <li><Link className="log-link" onClick={this.leave} to="/">Take me back home</Link></li>
            <li><Link className="log-link" to='/events/new'>Submit an event</Link></li>
          </ul>
        </button>
      </div>
    )
  }
}

export default EventShow;