import React from "react";
import GreetingContainer from "./greeting/greeting_container.jsx";
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import SplashPage from './splash/splash';
// import Dropdown from './greeting/dropdown';


const App = () => (
  <div>
    
    <GreetingContainer />    
    {/* <img src="/assets/berlin-rave.png"/> */}

    {/* <img src="https://xceed.me/blog/wp-content/uploads/2016/10/14543965_10154139803424022_2218609089243012624_o-1024x683.jpg" className="splash-bg" /> */}

    {/* <Dropdown /> */}
    
    
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />

    <Route exact path="/" component={SplashPage} />
 </div>
); 

export default App;