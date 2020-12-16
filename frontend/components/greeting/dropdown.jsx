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
    this.setState({ "drop": true }); status
    $('body').on('click', e => {
      const drop = $('.login-signup');
      if (drop !== e.currentTarget) {
        this.leave();
      }
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
        <button onFocus={this.clicker} onBlur={this.leave}  className="login-signup"> 
          <span onClick={this.mobileDrop}>Login / Register <small>⬇︎</small></span> 
         <ul className={this.state.drop ? "reveal" : "hide"}>
            <li><Link onClick={this.leave} className="log-link" to="/login">Login</Link></li>
            <li><Link onClick={this.leave} className="log-link" to="/signup">Register</Link></li>
         </ul>
       </button>
     </div>
    ) 
  }
}

export default Dropdown;