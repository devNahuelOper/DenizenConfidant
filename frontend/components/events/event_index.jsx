import React from 'react';
import { Link } from 'react-router-dom';
import EventIndexItem from './event_index_item';



class EventIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
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
    const { events } = this.props;

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
          <h1>Events</h1>
        </section>
        </div>
        <div className="subnav-container">
          <section id="events-subnav">
            <ul>
            <li><Link className="form" to="/events">All</Link></li>
              {/* <li><Link to="/signup">Register</Link></li> */}
              <li><Link to="/">Take me back home</Link></li>
              <li><Link to='/events'>Submit an event <br /> <small>Coming Soon!</small></Link></li>
            </ul>
          </section>
        </div>
        <div className="top-events">
         <section>
            <h1 id="content-title">Top Events Worldwide</h1>
            <hr/>
          <ul className="eventlist">
            {events.map(event => 
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