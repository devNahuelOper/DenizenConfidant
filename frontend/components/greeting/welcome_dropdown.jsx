import React from "react";
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

class WelcomeDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drop: false
    }
    this.clicker = this.clicker.bind(this);
    this.leave = this.leave.bind(this);
    // this.outside = this.outside.bind(this);
  }

  clicker(e) {
    this.setState({ "drop": true });
  }

  leave(e) {
    const reveal = document.getElementsByClassName('reveal')[0];
    if (reveal.contains(e.target)) {
      this.setState({ "drop": false });
    }
  }

  // outside(e) {
  //   const reveal = document.getElementsByClassName('reveal')[0];
  //   if (!reveal.contains(e.target)) return;
  // }

  render() {
    const { currentUser, logout } = this.props;
    
    return (
      <div className="welcome-wrap">

        <img src={window.djUrl} id="dj-icon" />

        <button onFocus={this.clicker} onBlur={this.leave}  className="logout-dropdown">
          <strong>Welcome</strong> {currentUser.username} <small>⬇︎</small> 
        </button>

        <ul className={this.state.drop ? "reveal" : "hide"}>
            <li onClick={logout}>Logout</li>
          </ul>
      
      </div>
    )
  }
}
// onBlur = { this.leave }

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeDropdown);