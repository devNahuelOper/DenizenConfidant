import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      
       
      <Link to="/login">Login</Link>
      &nbsp;/&nbsp;
      <Link to="/signup">Register</Link>
      
        <p id="login-icon">💿</p>
      
    </nav>
  );
  const personalGreeting = () => (
    <div>
      <ul className="welcome-group">
        <li className="welcome-name">Welcome</li>
        <li className="welcome-name">{currentUser.username}</li>
      </ul>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;