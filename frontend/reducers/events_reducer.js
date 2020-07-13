import {
  RECEIVE_EVENTS,
  RECEIVE_EVENT,
  REMOVE_EVENT
} from '../actions/event_actions';

const eventsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENTS:
      return action.events;
      // return Object.assign({}, state, action.events);
    case RECEIVE_EVENT:
      const newEvent = { [action.event.id]: action.event };
      return Object.assign({}, state, newEvent);
      // return Object.assign({}, state, action.events[action.event.id]);
    case REMOVE_EVENT:
      let nextState = Object.assign({}, state);
      delete nextState[action.event.id];
      return nextState;
    default:
      return state;
  }
};

export default eventsReducer;