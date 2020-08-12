import React from "react";
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import Tappable from 'react-tappable';

class WelcomeDropdown extends React.Component {
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
    const { currentUser, logout } = this.props;
    // onBlur = { this.leave } 
    return (
      <div className="welcome-wrap">
        <Tappable onTap={this.clicker} onTouchEnd={this.leave}>
        <button onFocus={this.clicker} onTap={this.clicker} onBlur={this.leave}  className="logout-dropdown">
          <span>
            <img src={window.djUrl} id="dj-icon" />    
    <h1 id="welcome-msg">  <strong>Welcome</strong> {currentUser.username}</h1> <small>⬇︎</small> 
         </span>
        <ul className={this.state.drop ? "reveal" : "hide"}>
            <li><Link onClick={this.leave} className="log-link" to={`/users/${currentUser.id}`}>My Profile</Link></li>
            <li><Link onClick={this.leave} className="log-link" to={`/users/${currentUser.id}/events`}>My Events</Link></li>
              <li className="log-link" onClick={logout}>Logout</li>
          </ul>
       </button>
       </Tappable>
      </div>
    )
  }
}

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeDropdown);

// {formatDateTime(currentUser.createdAt)}
