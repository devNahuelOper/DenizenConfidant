import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class CreateEventForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.event;
    this.state = {
      name: '',
      date: '',
      location: '',
      venue: '',
      description: '',
      headliners: '',
      cost: '',
      user_id: '',
      errors: this.props.errors
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleReset = this.handleReset.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.receiveEventErrors([]);
    window.scrollTo(0,0);
    const search = document.getElementById('search');
    const searchbar = document.getElementsByClassName('search-container')[0];
    search.onclick = function () {
      searchbar.style.display = 'block';
      search.className = 'show-search';
    }
    window.onclick = function (e) {
      let inSearchbar = searchbar.contains(e.target);
      let inSearch = search.contains(e.target);
      if (inSearchbar || inSearch) {
        return;
      }
      searchbar.style.display = 'none';
      search.className = 'hide-search';
    }
  }

  // handleReset(e) {
  //   e.preventDefault();
  //   this.props.clearEventErrors();
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({user_id: this.props.currentUser.id });
    // this.props.createEvent(this.state);
    const formData = new FormData();
    formData.append('event[name]', this.state.name);
    formData.append('event[date]', this.state.date);
    formData.append('event[location]', this.state.location);
    formData.append('event[venue]', this.state.venue);
    formData.append('event[description]', this.state.description);
    formData.append('event[headliners]', this.state.headliners);
    formData.append('event[cost]', this.state.cost);
    formData.append('event[user_id]', this.state.user_id);
    this.props.createEvent(formData);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
      this.props.receiveEventErrors([]);
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {`- ${error.split(' ').slice(1).join(' ')}`}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    // const [error, setError] = useState(false);
    const { name, date, venue, location, description } = this.state;
    const { currentUser } = this.props;
    return (
      <div className="create-event">
        <div id="nav-container">
          <section id="navbar">
            <nav>
              <Link to="/"><img src={window.logoUrl} id="logo" /></Link>
              <ul id="links">
                <li><Link to="/djs">DJs</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/genres">Music</Link></li>
                <li><button id="search">Search</button></li>
              </ul>
            </nav>
            <section className="eventform-header">
              {/* <Link to='/events'><img id="prev" src={window.prevUrl} alt="Back" /> My Events</Link> */}
              <Link to={`/users/${currentUser.id}/events`}><img id="prev" src={window.prevUrl} alt="Back" /> My Events</Link>
              <h1>Submit an event</h1>
            </section>
          </section>
        </div>
        <div className="event-form-container">
          <div className="form-wrap">
            <form className="event-form" onSubmit={this.handleSubmit}>
             <ul className="new-event-formlist">
              <li>
                <label>Event title / <br/>
                  <input 
                    id="name-input"
                    className="text-input"
                    type="text"
                    value={name}
                    onChange={this.update('name')}/>
                  </label>
              </li>
              <br/>
              <li> 
                <label>Event date / <br />
                  <input
                    id="date-input"
                    // className="text-input"
                    type="date"
                    value={date}
                    onChange={this.update('date')} />
                </label>
              </li> 
              <br/>
              <li>
                <label>Location / <br />
                  {/* <input
                    type="text"
                    value={location}
                    onChange={this.update('location')} /> */}
                
                <select name="Location" id="location-select" value={location || 'United States'} onChange={this.update('location')}>
                  <option value="--Select a country--" disabled={true}>--Select a country--</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Brazil">Brazil</option>
                  <option value="China">China</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                  <option value="Italy">Italy</option>
                  <option value="Japan">Japan</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Spain">Spain</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                </select>
                </label>
              </li>
              <br/>
              <li>
                <label>Venue / <br />
                  <input
                    className="text-input"
                    id="venue-input"
                    type="text"
                    placeholder="Type venue name"
                    value={venue}
                    onChange={this.update('venue')} />
                </label>
              </li>
              <br/>
              <li>
                <label>Description / <br/>
                <textarea name="Description"
                  className="text-input" 
                  id="description-input" 
                  placeholder="Type a brief description of event (optional)"
                  value={description}
                  onChange={this.update('description')}>
                </textarea>
                </label>
              </li>
              <br/>
            <li>
                <input id="submit-event" type="submit" value="Submit"/>
            </li>
              </ul>
              {this.props.errors.length > 0  &&
                <aside className="event-errors">Notifications /
             {this.renderErrors()}
                </aside>
              }
            </form>
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(CreateEventForm);
