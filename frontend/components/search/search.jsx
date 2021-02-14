import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { ClickAwayListener } from "@material-ui/core";
import { fetchDjs } from "../../actions/dj_actions";
import { fetchGenres } from "../../actions/genre_actions";
import { fetchEvents } from "../../actions/event_actions";
import {
  showSearch,
  hideSearch,
  setSearchTerm,
  clearSearchTerm,
} from "../../actions/search_actions";
import { DjQueryContainer, EventQueryContainer, GenreQueryContainer } from "./entity_queries";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: this.props.searchTerm,
    };
    this.editSearchTerm = this.editSearchTerm.bind(this);
    this.resetSearchTerm = this.resetSearchTerm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    this.props.fetchDjs();
    this.props.fetchGenres();
    this.props.fetchEvents();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  editSearchTerm(e) {
    this.setState({ searchTerm: e.target.value });
    this.props.setSearchTerm(e.target.value);
  }

  resetSearchTerm() {
    this.setState({ searchTerm: "" });
    this.props.clearSearchTerm();
    this.props.hideSearch();
  }

  handleSubmit() {
    window.location = "#/search";
    // console.log('Submit');
  }

  render() {
    if (!this.props.searchBar) return null;
    const { djs, genres, events, searchTerm, hideSearch } = this.props;
    const ignoreClick = () => false;
    return (
      <>
        <ClickAwayListener
          onClickAway={
            window.location.hash != "#/search" ? hideSearch : ignoreClick
          }
        >
          <div className="search-container">
            <div id="searchbar">
              <form id="search-form" onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  id="search-input"
                  value={searchTerm}
                  onChange={this.editSearchTerm}
                  placeholder="DJs, Genres, Events"
                  autoComplete="off"
                />
                <div id="search-button-container">
                  <button id="search-button" type="submit">
                    Submit
                  </button>
                </div>
                  {Boolean(searchTerm) &&
                    window.location.hash !=
                      "#/search" && (
                      <div>
                        <ul id="searchlist" onClick={this.resetSearchTerm}>
                          <li>
                            <DjQueryContainer djs={djs} />
                          </li>
                          <li>
                            <GenreQueryContainer genres={genres} />
                          </li>
                          <li>
                            <EventQueryContainer events={events} />
                          </li>
                        </ul>
                      </div>
                      )}
              </form>
            </div>
          </div>
        </ClickAwayListener>
      </>
    );
  }
}


const mapStateToProps = (state) => {
  let searchTerm = state.ui.searchBar?.searchTerm || "";
  let regex = new RegExp(`^${searchTerm}`, "i");
  const { djs, events, genres } = state.entities;
  return {
    djs: Object.values(djs).filter((dj) => Boolean(searchTerm) && dj.name.match(regex)),
    genres: Object.values(genres).filter(genre => Boolean(searchTerm) && genre.name.match(regex)),
    events: Object.values(events).filter(event => Boolean(searchTerm) && event.name.match(regex)),
    searchBar: state.ui.searchBar,
    searchTerm: searchTerm,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchDjs: () => dispatch(fetchDjs()),
  fetchGenres: () => dispatch(fetchGenres()),
  fetchEvents: () => dispatch(fetchEvents()),
  hideSearch: () => dispatch(hideSearch()),
  showSearch: (searchBar) => dispatch(showSearch(searchBar)),
  setSearchTerm: (searchTerm) => dispatch(setSearchTerm(searchTerm)),
  clearSearchTerm: () => dispatch(clearSearchTerm()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
