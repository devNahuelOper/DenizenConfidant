import {
  RECEIVE_ALL_NEWS,
  RECEIVE_NEWS
} from '../actions/news_actions';

const newsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_NEWS:
      return action.news;
    case RECEIVE_NEWS:
      const newNews = { [action.news.id]: action.news };
      return Object.assign({}, state, newNews);
    default:
      return state;
  }
};

export default newsReducer;