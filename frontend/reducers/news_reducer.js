import {
  RECEIVE_ALL_NEWS
} from '../actions/news_actions';

const newsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_NEWS:
      return action.news;
    default:
      return state;
  }
};

export default newsReducer;