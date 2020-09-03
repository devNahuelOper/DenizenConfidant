import React from 'react';
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

  const personalGreeting = () => (
    <nav className="user">
      <div className="welcome-container">
          <WelcomeDropdown />
      </div>
    </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks()
   
};


export default Greeting;

