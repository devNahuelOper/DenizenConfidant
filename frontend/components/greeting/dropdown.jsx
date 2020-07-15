import React from "react";
import { Link } from 'react-router-dom';


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
    this.setState({ "drop": true });
  }

  leave(e) {
    this.setState({ "drop": false });
  }

  render() {
    return (
     <div className="login-wrap">
       <button onFocus={this.clicker} onBlur={this.leave} className="login-signup">Login / Register
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