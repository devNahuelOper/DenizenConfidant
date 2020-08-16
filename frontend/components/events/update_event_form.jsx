import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { TitleComponent } from '../title_component.jsx';
import {
  formatDateStyle
} from '../../util/date_util';

class UpdateEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      venue: '',
      cost: '',
      date: '',
      headliners: '',
      description: '',
      // id: '',
      // user_id: '',
      // location: '',
      // id: this.props.event ? this.props.event.id : null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);
    window.scrollTo(0, 0);
  }


  componentDidUpdate() {
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

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
      // this.props.receiveEventErrors([]);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.updateEvent(this.state);
    const formData = new FormData();
    formData.append('event[id]', this.state.id);
    formData.append('event[user_id]', this.state.user_id);
    formData.append('event[location]', this.state.location);
    formData.append('event[name]', this.state.name);
    formData.append('event[venue]', this.state.venue);
    formData.append('event[description]', this.state.description);
    formData.append('event[headliners]', this.state.headliners);
    formData.append('event[cost]', this.state.cost);
    formData.append('event[date]', this.state.date);
    this.props.updateEvent(formData).then(() =>
      this.props.history.push(`/users/${currentUser.id}/events`)
    )
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
    const { event, currentUser } = this.props;
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
                    onChange={this.update('name')}/> 
                  </label>
                 <b>at</b> 
                <article id="update-venue"> 
                  <label htmlFor="venue">Venue / <br/>
                  <input type="text"
                    className="update-input"
                    defaultValue={event.venue}
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
                  defaultValue={event.date}
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
                      defaultValue={event.headliners}
                      onChange={this.update('headliners')}
                      >
                    </textarea>
                  </label>
              </li>
              <li>
                  <label htmlFor="cost">Cost / <small>{currencies[`${event.location}`]}</small> <br/>
                    <input type="text"
                      className="update-input"
                      defaultValue={event.cost}
                      onChange={this.update('cost')}
                      />
                </label>
              </li>
              <li>
                  <label>Description and updates/ <small>Use this space to tell the world about your event. You can add new updates at any time.</small><br />
                    <textarea name="Description"
                      id="update-description"
                      defaultValue={event.description}
                      // value={this.state.description}
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
                    onChange={this.handleFile.bind(this)}/>
                </label>
              </li>
              <li>
                    <input id="submit-event" type="submit" value="Submit"/>
              </li>
              </ul>
              <small><i></i></small>
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
        <button className="subnav-drop" onFocus={this.clicker} onTap={this.clicker} onBlur={this.leave}> <span>Submit Update <small>⬇︎</small></span>
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
