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
import GenreIndexContainer from './genres/genre_index_container';
import GenreShowContainer from './genres/genre_show_container';
import SplashContainer from './splash/splash_container';
import Search from './search/search';
// import EventShow from './events/event_show';

// import Dropdown from './greeting/dropdown';

// const App = () => (
//   <div>
    
//     <GreetingContainer />    
//     <Search />
//     <Switch>
//       <AuthRoute path="/login" component={LoginFormContainer} />
//       <AuthRoute path="/signup" component={SignupFormContainer} />
//       <Route exact path="/" component={SplashContainer} />
//       <Route exact path="/events" component={EventIndexContainer}/>
//       <Route exact path="/events/:eventId" component={EventShowContainer} />
//       <Route exact path="/djs" component={DjIndexContainer} />
//       <Route exact path="/djs/:djId" component={DjShowContainer} />
//       <Route exact path="/genres" component={GenreIndexContainer}/>
//       <Route exact path="/genres/:genreId" component={GenreShowContainer} />

//     </Switch>

//     <Footer />
//  </div>
// ); 

// const searchbar = document.getElementsByClassName('search-container')[0];


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const search = document.getElementById('search');
    const searchbar = document.getElementsByClassName('search-container')[0];
    search.onclick = function () {
      searchbar.style.display = 'block';
      search.style.backgroundColor = 'white';
      search.style.color = 'black';
      search.style.borderBottom = '2px solid white';
    }
    window.onclick = function (e) {
      let inSearchbar = searchbar.contains(e.target);
      let inSearch = search.contains(e.target);
      if (inSearchbar || inSearch) {
        return;
      }
      searchbar.style.display = 'none';
      search.style.backgroundColor = 'transparent';
      search.style.color = 'currentColor';
      search.style.borderBottom = 'unset';
    }
  }


  render() {
    // const search = document.getElementById('search');
    return (
      <div>

        <GreetingContainer />
       
        {/* {this.state.shown && (
            <Search ref={node => { this.node = node; }}/>
        )} */}
        <Search />
      
        <Switch>
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <Route exact path="/" component={SplashContainer} />
          <Route exact path="/events" component={EventIndexContainer} />
          <Route exact path="/events/:eventId" component={EventShowContainer} />
          <Route exact path="/djs" component={DjIndexContainer} />
          <Route exact path="/djs/:djId" component={DjShowContainer} />
          <Route exact path="/genres" component={GenreIndexContainer} />
          <Route exact path="/genres/:genreId" component={GenreShowContainer} />

        </Switch>

        <Footer />
      </div>
    )
  }
}

export default App;