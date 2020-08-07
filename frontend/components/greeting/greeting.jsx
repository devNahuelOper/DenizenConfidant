import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown';
import WelcomeDropdown from './welcome_dropdown';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="user">
      <nav className="login-container">
        <Dropdown />
      </nav>
    </div>
  );

  const [isShown, setIsShown] = useState(false);

  const personalGreeting = () => (
    <div className="user">
     <nav className="welcome-container">
        <WelcomeDropdown />
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

