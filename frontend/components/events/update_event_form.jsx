import React from 'react';
import { Link } from 'react-router-dom';
import { TitleComponent } from '../title_component.jsx';
import SubnavToggle from '../subnav/subnav';
import { expandCountry, getCountry } from '../../util/location_util';
import {
  formatDateStyle
} from '../../util/date_util';
import { toggleSearch } from '../../util/search_util';

class UpdateEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchEvent(this.props.match.params.eventId);
  }

  componentDidUpdate() {
    // console.log(this.state);
    toggleSearch();
  }


  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }


  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      // const fileString = `${file.lastModified},${file.lastModifiedDate},${file.name},${file.size},${file.type}`;
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
      // const formData = new FormData();
      // formData.append('event[photo]', file);
      // this.props.updateEventPhoto(formData, this.props.event.id)
      //   .then(event => this.props.history.push(`/events/${event.event.id}`))
      //   .then(() => window.scrollTo(500, 500))
      //   .then(() => this.props.history.push(`/events/${this.props.event.id}/edit`))
    } 
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('event[name]', this.state.name);
    formData.append('event[date]', this.state.date);
    formData.append('event[location]', this.state.location);
    formData.append('event[venue]', this.state.venue);
    formData.append('event[description]', this.state.description);
    formData.append('event[headliners]', this.state.headliners);
    formData.append('event[cost]', this.state.cost);
    if (this.state.photoFile) {
      formData.append('event[photo]', this.state.photoFile);
    }
    this.props.updateEvent(formData, this.props.event.id)
      .then(event => this.props.history.push(`/events/${event.event.id}`));
  }


  render() {
    const { event, currentUser } = this.props;

    if (!event) return null;
    const preview = this.state.photoUrl ? <img width="265px" height="150px" src={this.state.photoUrl} /> : null;

    const country = getCountry(event.location);
    return (
      <React.Fragment>
        <TitleComponent title={`DC: Update ${event.name}`} />
        <div className="create-event" id="update-event">
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
                  <span className="prev-hold">
                    <Link to={`/users/${currentUser.id}/events`}><img id="prev" src={window.prevUrl} alt="Back" /> My Events</Link>
                        &nbsp; / &nbsp;
                  <Link to={`/events/${event.id}/edit`}><img id="prev" src={window.prevUrl} alt="Back" /> {event.name}</Link>
                  </span>
                  <h1>Event management</h1>
                </section>
              </section>
            </div>
          </header>
          <div className="subnav-container">
            <section id="subnav">
              <ul>
                <li><Link to={`/users/${currentUser.id}/events`}>My Events</Link></li>
                <li className="form"><Link to={`/events/${event.id}/edit`}>Submit update</Link></li>
              </ul>
            </section>
            <SubnavToggle 
              currentUser={currentUser} 
              title="Submit Update" 
              labels={['My Events']}
              paths={[`/users/${currentUser.id}/events`]}/>
          </div>
          <div className="eventform-subheader-container">
            <section className="eventform-subheader">
              <ul className="details">
                <li>
                  <small>Status /</small> <br />
                  Any changes you make will be instantly applied to the live event listing.
                </li>
              </ul>
            </section>
          </div>
          <div className="event-form-container">
            <div className="form-wrap">
              <form className="update-event-form" onSubmit={this.handleSubmit}>
                <ul>
                  <li>
                    <span className="input-hold">
                      <label htmlFor="name">Event title / <br />
                        <input type="text"
                          className="update-input"
                          name="name"
                          value={this.state.name}
                          onChange={this.update('name')} />
                      </label>
                      <b>at</b>
                      <article id="update-venue">
                        <label htmlFor="venue">Venue / <br />
                          <input type="text"
                            className="update-input"
                            value={this.state.venue}
                            onChange={this.update('venue')}
                          />
                        </label>
                        <span>
                          <strong>{expandCountry[country].flag}</strong> {event.location}
                        </span>
                      </article>
                    </span>
                  </li>
                  <li>
                    <label htmlFor="date">Date / <br />
                      <input type="date"
                        id="date-input"
                        value={this.state.date}
                        onChange={this.update('date')}
                      />
                    </label>
                    <br /><br />
                    <span id="date-notice">
                      <small>This event is on</small> {formatDateStyle(this.state.date)}.
                </span>
                  </li>
                  <li>
                    <label htmlFor="headliners">Line-up / &nbsp; <small>Do not include urls, artist biographies or general event information.</small> <br />
                      <textarea name="headliners"
                        id="update-headliners"
                        value={this.state.headliners}
                        onChange={this.update('headliners')}
                      >
                      </textarea>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="cost">Cost / <small>{expandCountry[country].currency}</small> <br />
                      <input type="text"
                        className="update-input"
                        value={this.state.cost}
                        onChange={this.update('cost')}
                      />
                    </label>
                  </li>
                  <li>
                    <label>Description and updates/ <small id="description-msg">Use this space to tell the world about your event. You can add new updates at any time.</small><br />
                      <textarea name="Description"
                        id="update-description"
                        value={this.state.description}
                        onChange={this.update('description')}
                      >
                      </textarea>
                    </label>
                  </li>
                  <hr />
                  <li>
                    <div id="preview-frame">
                      <span>{preview}</span> <br />
                      <label htmlFor="photo">Flyer / <br />
                        <input type="file"
                          className="file-input"
                          accept=".jpg,.jpeg,.png,.gif"
                          onChange={this.handleFile.bind(this)} />
                      </label>
                    </div>
                  </li>
                  <li>
                    <input id="submit-event" type="submit" value="Submit" />                    
                  </li>
                </ul>
              </form>
            </div>
          </div>

        </div>
      </React.Fragment>
    )
  }
};


export default UpdateEventForm;
