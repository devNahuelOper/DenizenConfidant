import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUser, getCurrentUser } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import {
  formatDate
} from '../../util/date_util';
import { TitleComponent } from '../title_component.jsx';


class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
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
    const { currentUser } = this.props;
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
    return(
      <React.Fragment>
        <TitleComponent title={`DC: ${currentUser.username}`} />
      <div className="user-profile">
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
        <div className="subnav-container">
          <section id="subnav">
            <ul>
              <li className="form"><Link to={`/users/${currentUser.id}`}>Overview</Link></li>
              <li><Link to="/">Take me back home</Link></li>
            </ul>
          </section>
          <SubnavToggle />
        </div>
        <div className="user-subheader-container">
          <section className="user-subheader">
            <ul className="details">
              <li>
                <small>DC since /</small><br />
                {formatDate(currentUser.created_at).split(' ').slice(0, 3).join(' ')}
              </li>
              <li>
                <small>Location /</small> <br />
             <strong>{flags[`${currentUser.region}`]}</strong>{currentUser.region}
              </li>
            </ul>
          </section>
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
  }

  clicker(e) {
    this.setState({ "drop": true });
  }

  leave(e) {
    this.setState({ "drop": false });
  }

  render() {
    return (
      <div className="subnav-toggle" id={this.state.drop ? "expand" : "normal"}>
        <button className="subnav-drop" onFocus={this.clicker} onBlur={this.leave}> <span>Overview <small>⬇︎</small></span>
          <ul className={this.state.drop ? "reveal" : "hide"}>
            {/* <li><Link className="log-link" onClick={this.leave} to="/signup">Register</Link></li> */}
            <li id="user-reveal"><Link className="log-link" onClick={this.leave} to="/">Take me back home</Link></li>
          </ul>
        </button>
      </div>
    )
  }
}
// onBlur = { this.leave }
const mapStateToProps = (state) => {
  return {
    // user: state.entities.users[ownProps.match.params.userId]
    currentUser: getCurrentUser(state)
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);