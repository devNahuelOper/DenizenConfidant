import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUser, getCurrentUser } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import {
  formatDateTime
} from '../../util/date_util';


class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser } = this.props;
    return(
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
        </div>
        <div className="subheader-container">
          <section className="user-subheader">
            <ul className="details">
              <li>
                <small>DC since /</small><br />
              </li>
              <li>
                <small>Location /</small> <br />
                {currentUser.region}
              </li>
            </ul>
          </section>
        </div>

      </div>
    )
  }
}

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