import {
  RECEIVE_DJS,
  RECEIVE_DJ
} from '../actions/dj_actions';

const djsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DJS:
      return action.djs;
    case RECEIVE_DJ:
      const newDj = { [action.dj.id]: action.dj };
      return Object.assign({}, state, newDj);
    default:
      return state;
  } 
};

export default djsReducer;