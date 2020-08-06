import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown';
import WelcomeDropdown from './welcome_dropdown';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    
    <nav className="user">
      <Dropdown />
    </nav>
  );

  const [isShown, setIsShown] = useState(false);

  const personalGreeting = () => (
    <div className="user">
     <nav className="welcome-container">
        <WelcomeDropdown />

      {/* <div className="welcome-wrap">
      <img src={window.djUrl} id="dj-icon"/>
      <ul className="welcome-group">
        <li className="welcome-name">Welcome</li>
        <li className="welcome-name">{currentUser.username}</li>
      </ul>
      </div> */}

    </nav>

      {/* <button className="logout-button" onClick={logout} onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}>
          <img src={window.logoutUrl} />
          {isShown && (
            <div id="alert">
              Logout
            </div>
          )}
        </button> */}
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