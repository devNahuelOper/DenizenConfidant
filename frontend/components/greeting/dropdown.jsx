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
        <button onClick={this.clicker} onFocus={this.clicker} onBlur={this.leave}  className="login-signup"> 
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