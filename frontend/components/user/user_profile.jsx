import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUser, getCurrentUser } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import {
  formatMonthYear,
  formatLastOnline,
  formatTime,
  formatAbsDate
} from '../../util/date_util';
import {
  toggleSearch
} from '../../util/search_util';
import { TitleComponent } from '../title_component.jsx';
import Calendar from './calendar';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCalendar = this.toggleCalendar.bind(this);
  }

  componentDidMount() {
    toggleSearch();
    // console.log(localStorage.getItem('lastOnline'));
  }

  // componentDidUpdate() {
  //   console.log(this.props.events);
  // }

  toggleCalendar() {
    $('.calendar').toggle();
    $('#calendar-toggle').toggleClass('form');
    $('#overview').toggleClass('form');
    $('.user-main').toggleClass('cal-bg');
    $('.user-subheader-container').toggle();
    $('#overview').on('click', () => {
      $('.calendar').hide();
      $('#overview').addClass('form');
      $('#calendar-toggle').removeClass('form');
      $('.user-main').removeClass('cal-bg');
      $('.user-subheader-container').show();
    });
  }

  render() {
    const { currentUser, events } = this.props;
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
    const lastOnline = localStorage.getItem('lastOnline');
    return(
      <React.Fragment>
      <TitleComponent title={`DC: ${currentUser.username}`} />
      <div className="user-profile">
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
              <h1>{currentUser.username}</h1>
            </section>
          </div>
        </header>
        <div className="subnav-container">
          <section id="subnav">
            <ul>
              <li className="form" id="overview"><Link to={`/users/${currentUser.id}`}>Overview</Link></li>
                <li id="calendar-toggle" onClick={this.toggleCalendar}><Link to={`/users/${currentUser.id}`}>Calendar</Link></li>
              <li><Link to={`/users/${currentUser.id}/events`}>My Events</Link></li>
              {/* <li><Link to="/">Take me back home</Link></li> */}
            </ul>
          </section>
          <SubnavToggle currentUser={currentUser} toggleCalendar={this.toggleCalendar}/>
        </div>
        <div className="user-subheader-container">
          <section className="user-subheader">
            <ul className="details">
              <li>
                <small>DC since /</small><br />
                {/* {formatDate(currentUser.created_at).split(' ').slice(0, 3).join(' ')} */}
                  {formatMonthYear(currentUser.created_at)}
              </li>
              <li>
                <small>Last online /</small><br/>
                {formatLastOnline(lastOnline)} <small>{formatTime(lastOnline)}</small>
              </li>
              <li>
                <small>Location /</small> <br />
             <strong>{flags[`${currentUser.region}`]}</strong>{currentUser.region}
              </li>
            </ul>
          </section>
        </div>
        <div className="user-main">
          <Calendar currentUser={currentUser} events={events}/>
        </div>
      </div>
      </React.Fragment>
    )
  }
}

class SubnavToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drop: false
    }
    this.clicker = this.clicker.bind(this);
    this.leave = this.leave.bind(this);
    this.toggleCalendar = this.toggleCalendar.bind(this);
    this.mobileDrop = this.mobileDrop.bind(this);
  }

  clicker(e) {
    this.setState({ "drop": true });
  }

  leave(e) {
    this.setState({ "drop": false });
  }

  toggleCalendar() {
    this.props.toggleCalendar();
    this.leave();
  }

  mobileDrop(e) {
    e.preventDefault();
    this.setState({ "drop": true }); status
    $('body').on('click', e => {
      const drop = $('.subnav-drop');
      if (drop !== e.currentTarget) {
        this.leave();
      }
    })
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="subnav-toggle" id={this.state.drop ? "expand" : "normal"}>
        <button className="subnav-drop" onFocus={this.clicker} onBlur={this.leave}> <span onClick={this.mobileDrop} id="overview">Overview <small>⬇︎</small></span>
          <ul className={this.state.drop ? "reveal" : "hide"}>
            <li id="calendar-toggle" onClick={this.toggleCalendar}><Link className="log-link" to={`/users/${currentUser.id}`}>Calendar</Link></li>
            <li><Link className="log-link" to={`/users/${currentUser.id}/events`}>My Events</Link></li>
            {/* <li id="user-reveal"><Link className="log-link" onClick={this.leave} to="/">Take me back home</Link></li> */}
          </ul>
        </button>
      </div>
    )
  }
}
// onBlur = { this.leave }
const mapStateToProps = (state) => {
  return {
    currentUser: getCurrentUser(state),
    events: Object.values(state.entities.events).filter(event => event.hasOwnProperty('user_id')).filter(event => 
      formatAbsDate(event.date).year === new Date().getFullYear() && formatAbsDate(event.date).month === new Date().getMonth()
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId)),
  fetchEvents: () => dispatch(fetchEvents()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);