import { SHOW_SEARCH, HIDE_SEARCH } from "../actions/search_actions";

const searchReducer = (state = null, action) => {
  switch (action.type) {
    case SHOW_SEARCH:
      return action.searchBar;
    case HIDE_SEARCH:
      return null;
    default:
      return state;
  }
};

export default searchReducer;
