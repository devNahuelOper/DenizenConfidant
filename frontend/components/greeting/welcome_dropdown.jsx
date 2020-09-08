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
    this.lastOnline = this.lastOnline.bind(this);
    this.mobileDrop = this.mobileDrop.bind(this);
  }

  mobileDrop(e) {
    e.preventDefault();
    this.setState({ "drop": true });
    window.onfocus = function (e) {
      const reveal = $('.reveal');
      if (reveal.contains(e.target)) {
        return;
      }
      this.leave();
    }
    $('.log-link').on('click', () => {
      $('.logout-dropdown ul').hide();
      $('.logout-dropdown span').on('click', () => {
        $('.logout-dropdown ul').show();
      });
    })
  }

  clicker(e) {
    e.preventDefault();
    this.setState({ "drop": true });
  }

  leave(e) {
    this.setState({ "drop": false });
  }

  lastOnline() {
    let date = new Date();
    // this.props.logout;
    window.setTimeout(() => {
      localStorage.setItem('lastOnline', date);
      // console.log(localStorage.getItem('lastOnline'));
    }, 1000);
  }

  render() {
    const { currentUser, logout } = this.props;

    // onBlur = { this.leave } 
    return (
      <div className="welcome-wrap">
        {/* <Tappable onTap={this.clicker} onTouchEnd={this.leave}> */}
        <button onClick={this.mobileDrop} onFocus={this.clicker} onBlur={this.leave}  className="logout-dropdown">
          <span>
            <img src={window.djUrl} id="dj-icon" />    
            <h1 id="welcome-msg">  <strong>Welcome</strong> {currentUser.username}</h1> <small>⬇︎</small> 
         </span>
        <ul className={this.state.drop ? "reveal" : "hide"}>
            <li><Link onClick={this.leave} className="log-link" to={`/users/${currentUser.id}`}>My Profile</Link></li>
            <li><Link onClick={this.leave} className="log-link" to={`/users/${currentUser.id}/events`}>My Events</Link></li>
            <li className="log-link" onClick={logout} onMouseUp={this.lastOnline}>Logout</li>
          </ul>
       </button>
       {/* </Tappable> */}
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
