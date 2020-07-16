import React from "react";
import GreetingContainer from "./greeting/greeting_container.jsx";
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import SplashPage from './splash/splash';
import Footer from './footer/footer';
import EventIndexContainer from './events/event_index_container';
import EventShowContainer from './events/event_show_container';
import DjIndexContainer from './djs/dj_index_container';
import DjShowContainer from './djs/dj_show_container';
// import EventShow from './events/event_show';

// import Dropdown from './greeting/dropdown';

const App = () => (
  <div>
    
    <GreetingContainer />    
    
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={SplashPage} />
      <Route exact path="/events" component={EventIndexContainer}/>
      <Route exact path="/events/:eventId" component={EventShowContainer} />
      <Route exact path="/djs" component={DjIndexContainer} />
      <Route exact path="/djs/:djId" component={DjShowContainer} />
    </Switch>

    <Footer />
 </div>
); 

export default App;