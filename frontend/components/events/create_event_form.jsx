import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import {
  toggleSearch
} from '../../util/search_util';
import { dataURLtoFile } from '../../util/url_util';


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
      user_id: this.props.currentUser.id,
      errors: this.props.errors,
      photoFile: null,
      photoUrl: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleUrl = this.handleUrl.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.receiveEventErrors([]);
    window.scrollTo(0,0);
    toggleSearch();
  }

  resetForm(e) {
    e.preventDefault();
    this.props.clearEventErrors([]);
    const success = document.getElementById('success-msg');
    // e.target.reset();
    this.setState({
      name: '',
      date: '',
      location: '',
      venue: '',
      description: '',
      headliners: '',
      cost: ''
    })
    window.setTimeout(() => {
      success.innerHTML = 'Event Submitted!';
    }, 1000);
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleUrl(e) {
    const url = e.currentTarget.value;
    let type = dataURLtoFile(url).type.split('/')[1];
    let filename = this.state.name || 'image';
    const file = dataURLtoFile(url, `${filename}.${type}`);
    this.setState({ photoFile: file, photoUrl: url });
    // console.log(file);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({user_id: this.props.currentUser.id });
    const formData = new FormData();
    formData.append('event[name]', this.state.name);
    formData.append('event[date]', this.state.date);
    formData.append('event[location]', this.state.location);
    formData.append('event[venue]', this.state.venue);
    formData.append('event[description]', this.state.description);
    formData.append('event[headliners]', this.state.headliners);
    formData.append('event[cost]', this.state.cost);
    formData.append('event[user_id]', this.state.user_id);
    if (this.state.photoFile) {
      formData.append('event[photo]', this.state.photoFile);
    }
    this.props.createEvent(formData)
    .then(() => 
      this.props.history.push(`/users/${this.props.currentUser.id}/events`)
    )
    e.target.reset();
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
      this.props.receiveEventErrors([]);
      // console.log(this.state);
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
    const { name, date, venue, location, description, headliners, cost } = this.state;
    const { currentUser } = this.props;
    const preview = this.state.photoUrl ? <img width="265px" height="150px" src={this.state.photoUrl} /> : null;
    return (
      <div className="create-event">
        <header>
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
        </header>
        <div className="event-form-container">
          <div className="form-wrap">
            <form className="event-form" onSubmit={this.handleSubmit} onReset={this.resetForm}>
              {/* onReset={this.resetForm} */}
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
                
                <select name="Location" id="location-select" value={location || 'United States'} onChange={this.update('location')}>
                  <option value="--Select a country--" disabled={true}>--Select a country--</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Canada">Canada</option>
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
                  <label>Line-up / <br />
                    <textarea name="Headliners"
                      className="text-input"
                      id="description-input"
                      placeholder="Who will be playing at this event? (optional)"
                      value={headliners}
                      onChange={this.update('headliners')}>
                    </textarea>
                  </label>
                </li>
                <br/>
                <li>
                  <label>Cost / <br />
                    <input
                      className="text-input"
                      id="date-input"
                      type="text"
                      // placeholder="How much?"
                      value={cost}
                      onChange={this.update('cost')} />
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
                  <div id="preview-frame">
                    <span>{preview}</span> <br/>
                      <div className="event-input-hold">
                        <label htmlFor="photo">Flyer / <br />
                          <input type="file"
                            className="file-input"
                            accept=".jpg,.jpeg,.png,.gif"
                            onChange={this.handleFile.bind(this)} />
                        </label>
                      <section>
                        <label id="external" htmlFor="photo">or enter an external image URL... <br />
                          <input type="text"
                            id="external"
                            onChange={this.handleUrl.bind(this)} />
                        </label>
                        <br />
                        <small>
                          Right-click on your image, then select <strong>Copy Image Address</strong>. <br />
                          URL should start with something like <strong>'data:image/jpeg;base64...'</strong>
                        </small>
                      </section>
                      </div>
                  </div>
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
              { this.props.errors.length === 0 &&
              <aside id="success-msg">
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
