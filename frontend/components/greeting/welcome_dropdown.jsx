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
    this.setState({ "drop": false });
  }

  // outside(e) {
  //   const reveal = document.getElementsByClassName('reveal')[0];
  //   if (!reveal.contains(e.target)) return;
  // }

  render() {
    const { currentUser, logout } = this.props;
    
    return (
      <div className="welcome-wrap">
        <button onFocus={this.clicker} onBlur={this.leave} className="logout-dropdown">
          <span>
            <img src={window.djUrl} id="dj-icon" />    
            <strong>Welcome</strong> {currentUser.username} <small>⬇︎</small> 
         </span>
        <ul className={this.state.drop ? "reveal" : "hide"}>
            <li onClick={logout}>Logout</li>
          </ul>
       </button>
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