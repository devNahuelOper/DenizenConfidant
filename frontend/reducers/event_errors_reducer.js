import {
  RECEIVE_EVENT_ERRORS,
  CLEAR_EVENT_ERRORS,
  RECEIVE_EVENT
} from '../actions/event_actions';

const eventErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      return action.errors;
    case CLEAR_EVENT_ERRORS:
      return [];
    case RECEIVE_EVENT:
      return [];
    default:
      return state;
  }
};

export default eventErrorsReducer;