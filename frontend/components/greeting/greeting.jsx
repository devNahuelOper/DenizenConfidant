import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="user">
      <ul className="login-signup">
        
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