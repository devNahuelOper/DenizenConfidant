import { combineReducers } from 'redux';

import usersReducer from "./users_reducer";
import eventsReducer from './events_reducer';
import djsReducer from './djs_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  events: eventsReducer,
  djs: djsReducer
});

export default entitiesReducer;

