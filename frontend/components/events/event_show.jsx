import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {

    // }
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);
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
    const { event } = this.props;

    return (
      <div className="events-index">
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
          <br/>
          <section className="eventshow-header">
            <Link to='/events'><img id="prev" src={window.prevUrl} alt="Back"/> Events</Link>
            <h2>{event.name}</h2>
          </section>
        </section>
        </div>
        <br/>
        <div className="subheader-container">
          <section className="eventshow-subheader">
            <ul className="details">
              <li>Date/ 
                <h3>{event.date}</h3> 
              </li>
              <li>Venue/ 
                <h3>{event.venue}</h3>
                <h4>{event.location}</h4>
              </li>
              <li>Cost/ 
                <h4>$100.00</h4>
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
            {/* <img src={`window.${event.name.toLowerCase()}Url`} alt=""/> */}
            <img id="event-image" src={`https://denizen-confidant-dev.s3.amazonaws.com/${event.name.toLowerCase().split(' ').join('')}.png`}/>
          </section>          
        </div>
      </div>
    )
  }
};

export default EventShow;