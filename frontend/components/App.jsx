import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';



const App = () => (
  <div>
    <header className="login-signup-container">
      <GreetingContainer /> 
    </header>
    <img src="https://xceed.me/blog/wp-content/uploads/2016/10/14543965_10154139803424022_2218609089243012624_o-1024x683.jpg" className="splash-bg" />

    <div className="denizen-confidant">
      <h1>Denizen C👽nfidant</h1>
    </div>
    {/* <a href="/"><img src="https://djmag.com/sites/default/files/article/image/Nottingham%20pics11.jpg" className="nav-logo" /></a> */}
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;