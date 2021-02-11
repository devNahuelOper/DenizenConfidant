export const SHOW_SEARCH = "SHOW_SEARCH";
export const HIDE_SEARCH = "HIDE_SEARCH";
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";
export const CLEAR_SEARCH_TERM = "CLEAR_SEARCH_TERM";
export const SEARCH_DJS = "SEARCH_DJS";
export const SEARCH_EVENTS = "SEARCH_EVENTS";
export const SEARCH_GENRES = "SEARCH_GENRES";

export const showSearch = (searchBar) => {
  return {
    type: SHOW_SEARCH,
    searchBar,
  };
};

export const hideSearch = (searchBar) => {
  return {
    type: HIDE_SEARCH,
    searchBar,
  };
};

export const setSearchTerm = (searchTerm) => {
  return {
    type: SET_SEARCH_TERM,
    searchTerm,
  };
};

export const clearSearchTerm = (searchTerm) => {
  return {
    type: CLEAR_SEARCH_TERM,
    searchTerm,
  };
};

export const searchDjs = (djs) => {
  return {
    type: SEARCH_DJS,
    djs,
  };
};

export const searchEvents = (events) => {
  return {
    type: SEARCH_EVENTS,
    events,
  };
};

export const searchGenres = (genres) => {
  return {
    type: SEARCH_GENRES,
    genres,
  };
};






