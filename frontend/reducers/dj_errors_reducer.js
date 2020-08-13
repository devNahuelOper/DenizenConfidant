import {
  RECEIVE_DJ_ERRORS,
  CLEAR_DJ_ERRORS,
  RECEIVE_DJ
} from '../actions/dj_actions';

const djErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DJ_ERRORS:
      return action.errors;
    case CLEAR_DJ_ERRORS:
      return [];
    case RECEIVE_DJ:
      return [];
    default:
      return state;
  }
};

export default djErrorsReducer;