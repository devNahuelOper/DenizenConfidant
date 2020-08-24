import { combineReducers } from 'redux';

import usersReducer from "./users_reducer";
import eventsReducer from './events_reducer';
import djsReducer from './djs_reducer';
import genresReducer from './genres_reducer';
import newsReducer from './news_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  events: eventsReducer,
  djs: djsReducer,
  genres: genresReducer,
  news: newsReducer
});

export default entitiesReducer;

