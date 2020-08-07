import React from "react";
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import {
  formatDateTime
} from '../../util/date_util';

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
    
    return (
      <div className="welcome-wrap">
        <button onFocus={this.clicker} onBlur={this.leave}  className="logout-dropdown">
          <span>
            <img src={window.djUrl} id="dj-icon" />    
    <h1 id="welcome-msg">  <strong>Welcome</strong> {currentUser.username}</h1> <small>⬇︎</small> 
         </span>
        <ul className={this.state.drop ? "reveal" : "hide"}>
            <li onClick={logout}>Logout</li>
          </ul>
       </button>
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