import React from 'react';
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
      cost: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.createEvent(this.state);
    const formData = new FormData();
    formData.append('event[name]', this.state.name);
    formData.append('event[date]', this.state.date);
    formData.append('event[location]', this.state.location);
    formData.append('event[venue]', this.state.venue);
    formData.append('event[description]', this.state.description);
    this.props.createEvent(formData);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  render() {
    const { name, date, venue, location, description } = this.state;
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
            <h1>Submit an event</h1>
          </section>
        </div>
        <div className="event-form-container">
          <div className="form-wrap">
            <form onSubmit={this.handleSubmit}>
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
                  placeholder="Type a brief description of event"
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
            </form>
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(CreateEventForm);
