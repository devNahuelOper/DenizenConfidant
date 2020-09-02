import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown';
import WelcomeDropdown from './welcome_dropdown';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="user">
      <div className="login-container">
        <Dropdown />
      </div>
    </nav>
  );

  const [isShown, setIsShown] = useState(false);

  const personalGreeting = () => (
    <nav className="user">
     <div className="welcome-container">
        <WelcomeDropdown />
    </div>

      {/* <button className="logout-button" onClick={logout} onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}>
          <img src={window.logoutUrl} />
          {isShown && (
            <div id="alert">
              Logout
            </div>
          )}
        </button> */}
    </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks()
   
};


export default Greeting;

