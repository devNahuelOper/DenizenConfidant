import {
  SHOW_SEARCH,
  HIDE_SEARCH,
  SET_SEARCH_TERM,
  CLEAR_SEARCH_TERM,
  SEARCH_DJS,
  SEARCH_EVENTS,
  SEARCH_GENRES,
} from "../actions/search_actions";

const searchReducer = (state = null, action) => {
  switch (action.type) {
    case SHOW_SEARCH:
      return { ...state, searchBar: action.searchBar };
    case HIDE_SEARCH:
      return null;
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.searchTerm };
    case CLEAR_SEARCH_TERM:
      return "";
    case SEARCH_DJS:
      return state.djs.filter(dj => state.searchTerm && dj.startsWith(state.searchTerm));
    default:
      return state;
  }
};

export default searchReducer;
