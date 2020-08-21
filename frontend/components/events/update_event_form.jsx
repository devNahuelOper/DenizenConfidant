import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { TitleComponent } from '../title_component.jsx';
import {
  formatDateStyle
} from '../../util/date_util';
import {
  toggleSearch
} from '../../util/search_util';

class UpdateEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {
      },
      name: '',
      venue: '',
      location: '',
      date: '',
      headliners: '',
      cost: '',
      description: '',
      photoUrl: null
    }
    // this.state = {
    //   name: '',
    //   venue: '',
    //   cost: '',
    //   date: '',
    //   headliners: '',
    //   description: '',
    // }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.update = this.update.bind(this);
    this.setEvent = this.setEvent.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId)
    .then(() => this.setState({event: this.props.event}))
    .then(() => this.setState({
      name: this.props.event.name,
      venue: this.props.event.venue,
      location: this.props.event.location,
      date: this.props.event.date,
      headliners: this.props.event.headliners,
      cost: this.props.event.cost,
      description: this.props.event.description,
      photoUrl: this.props.event.photoUrl
    }));
    window.scrollTo(0, 0);
    console.log(this.props);
  }


  componentDidUpdate() {
    toggleSearch();
    console.log(this.state);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
      // this.props.receiveEventErrors([]);
      this.setEvent();
    }
  }

  setEvent() {
    this.setState({
      event: {
        id: this.state.event.id,
        user_id: this.state.event.user_id,
        name: this.state.name,
        venue: this.state.venue,
        location: this.state.location,
        date: this.state.date,
        headliners: this.state.headliners,
        cost: this.state.cost,
        description: this.state.description,
        photoUrl: this.state.photoUrl
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateEvent(this.state.event);
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

  render() {
    const { currentUser } = this.props;
    // const { event } = this.state;
    const { event, name, date, venue, location, description, headliners, cost } = this.state;

    const flags = {
      'Argentina': '🇦🇷',
      'Brazil': '🇧🇷',
      'Canada': '🇨🇦',
      'China': '🇨🇳',
      'France': '🇫🇷',
      'Germany': '🇩🇪',
      'Italy': '🇮🇹',
      'Japan': '🇯🇵',
      'Netherlands': '🇳🇱',
      'Spain': '🇪🇸',
      'United Kingdom': '🇬🇧',
      'United States': '🇺🇸'
    }
    const currencies = {
      'Argentina': 'ARS',
      'Brazil': 'BRL',
      'Canada': 'CAD',
      'China': 'CNY',
      'France': 'EUR',
      'Germany': 'EUR',
      'Italy': 'EUR',
      'Japan': 'JPY',
      'Netherlands': 'EUR',
      'Spain': 'EUR',
      'United Kingdom': 'GBP',
      'United States': 'USD'
    }

    if (!event) return null;
    return (
      <React.Fragment>
        <TitleComponent title={`DC: Update ${event.name}`} />
      <div className="create-event" id="update-event">
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
        <div className="subnav-container">
          <section id="subnav">
            <ul>
              <li><Link to={`/users/${currentUser.id}/events`}>My Events</Link></li>
              <li className="form"><Link to={`/events/${event.id}/edit`}>Submit update</Link></li>
            </ul>
          </section>
          <SubnavToggle currentUser={currentUser}/>
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
                  <label htmlFor="name">Event title / <br/>
                  <input type="text"
                    className="update-input"
                    defaultValue={event.name}
                    name="name"
                    value={name}
                    onChange={this.update('name')}/> 
                  </label>
                 <b>at</b> 
                <article id="update-venue"> 
                  <label htmlFor="venue">Venue / <br/>
                  <input type="text"
                    className="update-input"
                    // defaultValue={event.venue}
                    value={venue}
                    onChange={this.update('venue')}
                    />
                    </label>
                    <span>
                      <strong>{flags[`${event.location}`]}</strong> {event.location}
                    </span>
                  </article>
                </span>
              </li>
              <li>
                <label htmlFor="date">Date / <br/>
                <input type="date"
                  id="date-input"
                  // defaultValue={event.date}
                  value={date}
                  onChange={this.update('date')}
                  />
                </label>
                <br/><br/>
                <span id="date-notice">
                  <small>This event is on</small> {formatDateStyle(event.date)}.
                </span>
              </li>
              <li>
                  <label htmlFor="headliners">Line-up / &nbsp; <small>Do not include urls, artist biographies or general event information.</small> <br/>
                    <textarea name="headliners" 
                      id="update-headliners"
                      // defaultValue={event.headliners}
                      value={headliners}
                      onChange={this.update('headliners')}
                      >
                    </textarea>
                  </label>
              </li>
              <li>
                  <label htmlFor="cost">Cost / <small>{currencies[`${event.location}`]}</small> <br/>
                    <input type="text"
                      className="update-input"
                      // defaultValue={event.cost}
                      value={cost}
                      onChange={this.update('cost')}
                      />
                </label>
              </li>
              <li>
                  <label>Description and updates/ <small>Use this space to tell the world about your event. You can add new updates at any time.</small><br />
                    <textarea name="Description"
                      id="update-description"
                      // defaultValue={event.description}
                      value={description}
                      onChange={this.update('description')}
                      >
                    </textarea>
                  </label>
              </li>
              <hr/>
              <li>
                <label htmlFor="photo">Flyer / <br/>
                  <input type="file" 
                    className="file-input"
                    accept=".jpg,.jpeg,.png,.gif"
                    // value={event.photoUrl}
                    onChange={this.handleFile.bind(this)}/>
                </label>
              </li>
              <li>
                  <input id="submit-event" type="submit" value="Submit"/>
                    <br/>
                  <small><i>Under Construction</i></small>
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

  render() {
    const { currentUser } = this.props;
    return (
      <div className="subnav-toggle" id={this.state.drop ? "expand" : "normal"}>
        <button className="subnav-drop" onFocus={this.clicker} onBlur={this.leave}> <span>Submit Update <small>⬇︎</small></span>
          <ul className={this.state.drop ? "reveal" : "hide"}>
            {/* <li><Link className="log-link" onClick={this.leave} to="/signup">Register</Link></li> */}
            <li><Link className="log-link" to={`/users/${currentUser.id}/events`}>My Events</Link></li>
          </ul>
        </button>
      </div>
    )
  }
}

export default withRouter(UpdateEventForm);
