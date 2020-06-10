import React from "react";
import GreetingContainer from "./greeting/greeting_container.jsx";
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import SplashPage from './splash/splash';
import Footer from './footer/footer';

// import Dropdown from './greeting/dropdown';


const App = () => (
  <div>
    
    <GreetingContainer />    
    
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />

    <Route exact path="/" component={SplashPage} />
    <Footer />
 </div>
); 

export default App;