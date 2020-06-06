import React from 'react';
import { Link } from 'react-router-dom';
// import Dropdown from './dropdown';


const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="user">
      <ul className="login-signup">
        {/* <Dropdown /> */}
        <li> 
          <Link to="/login">Login</Link>
          &nbsp;/&nbsp;
          <Link to="/signup">Register</Link>
        </li>
        {/* <li id="login-icon"></li>    */}
      </ul>
      {/* <img src="/assets/turntable.png" /> */}
      {/* <img src="/assets/dj3.png" id="dj-icon"/> */}
    </nav>
  );


  const personalGreeting = () => (
    <div className="user">
      <ul className="welcome-group">
        <li className="welcome-name">Welcome</li>
        <li className="welcome-name">{currentUser.username}</li>
      </ul>
      <img src="/assets/dj3.png" id="dj-icon" />
      <button className="logout-button" onClick={logout}>Log Out</button>

    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks()
   
};


export default Greeting;


// import React from "react";

// class Dropdown extends React.Component {
//   constructor(props) {
//     this.state = {
//       drop: false
//     }
//     this.clicker.bind(this)
//   }

//   clicker(e) {
//     this.setState(drop, true)
//   }

//   leave(e) {
//     this.setState(drop, false)
//   }



//   render() {
//     <button onFocus={this.clicker} onBlur={this.leave}>
//       <ul className={this.state ? reveal : hide}>
//         <li>...
//             </ul>
//         </button> 
//     }
// }