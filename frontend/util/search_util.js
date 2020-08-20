export const toggleSearch = () => {
  const search = document.getElementById('search');
  const searchbar = document.getElementsByClassName('search-container')[0];
  search.onclick = function () {
    searchbar.style.display = 'block';
    search.className = 'show-search';
  }
  window.onclick = function (e) {
    let inSearchbar = searchbar.contains(e.target);
    let inSearch = search.contains(e.target);
    if (inSearchbar || inSearch) {
      return;
    }
    searchbar.style.display = 'none';
    search.className = 'hide-search';
  }
}