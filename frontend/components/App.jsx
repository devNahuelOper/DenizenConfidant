import React from "react";
import GreetingContainer from "./greeting/greeting_container.jsx";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import UserProfile from "./user/user_profile";
import UserEvents from "./user/user_events";
import UserDjs from "./user/user_djs";
import Footer from "./footer/footer";
import EventIndexContainer from "./events/event_index_container";
import EventShowContainer from "./events/event_show_container";
import CreateEventFormContainer from "./events/create_event_form_container";
import UpdateEventFormContainer from "./events/update_event_form_container";
import DjIndexContainer from "./djs/dj_index_container";
import DjShowContainer from "./djs/dj_show_container";
import CreateDjFormContainer from "./djs/create_dj_form_container";
import UpdateDjFormContainer from "./djs/update_dj/update_dj_form_container";
import GenreIndexContainer from "./genres/genre_index_container";
import GenreShowContainer from "./genres/genre_show_container";
import SplashContainer from "./splash/splash_container";
import Search from "./search/search";
import SearchPage from "./search/search_page";
import NewsShow from "./news/news_show";
import { TitleComponent } from "./title_component.jsx";
import Modal from "./modal/modal";
// import { openModal, closeModal } from "../actions/modal_actions";
import { showSearch, hideSearch } from "../actions/search_actions";

const withTitle = ({ component: Component, title }) => {
  return class Title extends React.Component {
    render() {
      return (
        <React.Fragment>
          <TitleComponent title={title} />
          <Component {...this.props} />
        </React.Fragment>
      );
    }
  };
};

const EventsIndexContainer = withTitle({
  component: EventIndexContainer,
  title: "DC: Events",
});
const DjsIndexContainer = withTitle({
  component: DjIndexContainer,
  title: "DC: DJs",
});
const GenresIndexContainer = withTitle({
  component: GenreIndexContainer,
  title: "DC: Genres",
});



const App = (props) => {
  const { state, dispatch } = props;

  document.addEventListener("keydown", (e) => {
    if (e.code == "KeyS") {
      dispatch(showSearch(state.ui.searchBar));
      // dispatch(openModal(state.ui.modal));
      console.log("Show");
    }
    if (e.code == "KeyH") {
      dispatch(hideSearch());
      // dispatch(closeModal());
      console.log("Hide");
    }
  });

  return (
    <>
      <GreetingContainer />
      <Search />
      <Modal />
      <Switch>
        <AuthRoute
          path="/login"
          component={withTitle({
            component: LoginFormContainer,
            title: "Login",
          })}
        />
        <AuthRoute
          path="/signup"
          component={withTitle({
            component: SignupFormContainer,
            title: "Register as a DC member today",
          })}
        />
        <ProtectedRoute exact path="/users/:userId" component={UserProfile} />
        <ProtectedRoute
          exact
          path="/users/:userId/events"
          component={UserEvents}
        />
        <ProtectedRoute exact path="/users/:userId/djs" component={UserDjs} />
        <Route
          exact
          path="/"
          component={withTitle({
            component: SplashContainer,
            title: "DC: Denizen Confidant - electronic music online",
          })}
        />
        <ProtectedRoute
          path="/events/new"
          component={withTitle({
            component: CreateEventFormContainer,
            title: "DC: Submit an event",
          })}
        />
        <ProtectedRoute
          path="/events/:eventId/edit"
          component={UpdateEventFormContainer}
        />
        <Route exact path="/events" component={EventsIndexContainer} />
        <Route exact path="/events/:eventId" component={EventShowContainer} />
        <ProtectedRoute
          path="/djs/new"
          component={withTitle({
            component: CreateDjFormContainer,
            title: "DC: Create an artist page",
          })}
        />
        <ProtectedRoute
          path="/djs/:djId/edit"
          component={UpdateDjFormContainer}
        />
        <Route exact path="/djs" component={DjsIndexContainer} />
        <Route exact path="/djs/:djId" component={DjShowContainer} />
        <Route exact path="/genres" component={GenresIndexContainer} />
        <Route exact path="/genres/:genreId" component={GenreShowContainer} />
        <Route exact path="/news/:newsId" component={NewsShow} />
        <Route exact path="/search" component={SearchPage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
