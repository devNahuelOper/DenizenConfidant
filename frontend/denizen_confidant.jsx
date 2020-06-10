 import React from 'react';
 import ReactDOM from 'react-dom';
//  import { login, logout, signup } from './util/session_api_util';
 import { createEvent } from './util/event_api_util';
 import configureStore from './store/store';
 import Root from "./components/root";
//  import { login } from './actions/session_actions';


 document.addEventListener('DOMContentLoaded', () => {
   let store;
   if (window.currentUser) {
     const preloadedState = {
       session: { id: window.currentUser.id },
       entities: {
         users: { [window.currentUser.id]: window.currentUser }
       }
     };
     store = configureStore(preloadedState);
     delete window.currentUser;
   } else {
     store = configureStore();
   }

   window.getState = store.getState;
   window.dispatch = store.dispatch;
   window.createEvent = createEvent;
   
   const root = document.getElementById('root');

   ReactDOM.render(<Root store={store} />, root);
 });


  //  window.login = login;
  //  window.logout = logout;
  //  window.signup = signup;
  //  window.getState = store.getState;
  //  window.dispatch = store.dispatch;