import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class CreateEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;

    this.handleSubmit = this.handleSubmit.bind(this);
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
              <label>Event title / <br/>
                <input 
                  className="text-input"
                  type="text"
                  value={name}
                  onChange={this.update('name')}/>
              </label>
              <br/>
              <label>Event date / <br />
                <input

                  type="text"
                  value={date}
                  onChange={this.update('date')} />
              </label>
              <br/>
              <label>Location / <br />
                <input
                  type="text"
                  value={location}
                  onChange={this.update('location')} />
              </label>
              <br/>
              <label>Venue / <br />
                <input
                  className="text-input"
                  id="venue-input"
                  type="text"
                  placeholder="Type venue name"
                  value={venue}
                  onChange={this.update('venue')} />
              </label>
              <br/>
              <label>Description / <br/>
              <textarea name="Description"
                  className="text-input" 
                  id="description-input" 
                  placeholder="Type a brief description of event"
                  value={description}
                  onChange={this.update('description')}>
              </textarea>
              </label>
              <br/>
              <input id="submit-event" type="submit" value="Submit"/>
            </form>
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(CreateEventForm);
