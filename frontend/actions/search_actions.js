export const SHOW_SEARCH = "SHOW_SEARCH";
export const HIDE_SEARCH = "HIDE_SEARCH";

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
