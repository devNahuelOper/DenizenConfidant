import React from "react";
import { Link } from 'react-router-dom';
import Tappable from 'react-tappable';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drop: false
    }
    this.clicker = this.clicker.bind(this);
    this.leave = this.leave.bind(this);
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
      $('.login-signup ul').hide();
      $('.login-signup span').on('click', () => {
        $('.login-signup ul').show();
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
  // onBlur = { this.leave }
  // onTouchEnter = { this.clicker } onTouchLeave = { this.leave }
  render() {
    return (
     <div className="login-wrap">
        {/* <Tappable onTap={this.clicker}> */}
        <button onClick={this.mobileDrop} onFocus={this.clicker} onBlur={this.leave}  className="login-signup"> 
        <span>Login / Register <small>⬇︎</small></span> 
         <ul className={this.state.drop ? "reveal" : "hide"}>
            <li><Link onClick={this.leave} className="log-link" to="/login">Login</Link></li>
            <li><Link onClick={this.leave} className="log-link" to="/signup">Register</Link></li>
         </ul>
       </button>
       {/* </Tappable> */}
     </div>
    ) 
  }
}

export default Dropdown;