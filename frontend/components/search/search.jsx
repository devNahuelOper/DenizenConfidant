import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { ClickAwayListener } from "@material-ui/core";
import { fetchDjs } from "../../actions/dj_actions";
import { fetchGenres } from "../../actions/genre_actions";
import { fetchEvents } from "../../actions/event_actions";
import { showSearch, hideSearch, setSearchTerm, clearSearchTerm } from "../../actions/search_actions";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      events: [],
      searchTerm: this.props.searchTerm,
    };
    this.editSearchTerm = this.editSearchTerm.bind(this);
    this.resetSearchTerm = this.resetSearchTerm.bind(this);
    this.djSearch = this.djSearch.bind(this);
    this.genreSearch = this.genreSearch.bind(this);
    this.eventSearch = this.eventSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
    this._isMounted = true;
    this.props.fetchDjs();
    this.props
      .fetchGenres()
      .then((genres) =>
        this.setState({ genres: Object.values(genres.genres) })
      );
    this.props
      .fetchEvents()
      .then((events) =>
        this.setState({ events: Object.values(events.events) })
      );
     console.log(this.props);
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
  }

  djSearch() {
    return this.state.djs.filter((dj) =>
      dj.name.toLowerCase().startsWith(this.state.searchTerm.toLowerCase())
    );
  }

  genreSearch() {
    return this.state.genres.filter((genre) =>
      genre.name.toLowerCase().startsWith(this.state.searchTerm.toLowerCase())
    );
  }

  eventSearch() {
    return this.state.events.filter((event) =>
      event.name.toLowerCase().startsWith(this.state.searchTerm.toLowerCase())
    );
  }

  render() {
    if (!this.props.searchBar) return null;
    const { djs } = this.props;
    return (
      <>
        <ClickAwayListener onClickAway={this.props.hideSearch}>
          <div className="search-container">
            <div id="searchbar">
              <form id="search-form" onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  id="search-input"
                  value={this.state.searchTerm}
                  onChange={this.editSearchTerm}
                  placeholder="DJs, Genres, Events"
                  autocomplete="off"
                />
                <div id="search-button-container">
                  <button id="search-button" type="submit">
                    Submit
                  </button>
                </div>
                <div
                  style={
                    this.state.searchTerm.length
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  {this.state.searchTerm.length && (
                    <ul id="searchlist" onClick={this.resetSearchTerm}>
                      <li>
                        <DjQueryContainer djs={djs} />
                      </li>
                      <li>
                        <GenreQueryContainer genres={this.genreSearch()} />
                      </li>
                      <li>
                        <EventQueryContainer events={this.eventSearch()} />
                      </li>
                    </ul>
                  )}
                </div>
              </form>
            </div>
          </div>
        </ClickAwayListener>
      </>
    );
  }
}

class DjQueryContainer extends React.Component {
  render() {
    return (
      <div id="dj-query-container">
        {this.props.djs.map((dj) => (
          <DjQuery dj={dj} key={dj.id + 1} />
        ))}
      </div>
    );
  }
}

class GenreQueryContainer extends React.Component {
  render() {
    return (
      <div id="genre-query-container">
        {this.props.genres.map((genre) => (
          <GenreQuery genre={genre} key={genre.id} />
        ))}
      </div>
    );
  }
}

class EventQueryContainer extends React.Component {
  render() {
    return (
      <div id="event-query-container">
        {this.props.events.map((event) => (
          <EventQuery event={event} key={event.id} />
        ))}
      </div>
    );
  }
}

class DjQuery extends React.Component {
  render() {
    return (
      <Link to={`/djs/${this.props.dj.id}`}>
        <div className="query-item" id="dj-query-item">
          <strong>{this.props.dj.name}</strong> <small>DJ</small>
        </div>
      </Link>
    );
  }
}

class GenreQuery extends React.Component {
  render() {
    return (
      <Link to={`/genres/${this.props.genre.id}`}>
        <div className="query-item" id="genre-query-item">
          <strong>{this.props.genre.name}</strong> <small>Genre</small>
        </div>
      </Link>
    );
  }
}

class EventQuery extends React.Component {
  render() {
    return (
      <Link to={`/events/${this.props.event.id}`}>
        <div className="query-item" id="event-query-item">
          <strong>{this.props.event.name}</strong> <small>Event</small>
        </div>
      </Link>
    );
  }
}

const mapStateToProps = (state) => {
  let searchTerm = state.ui.searchBar?.searchTerm || '';
  let regex = new RegExp(`^${searchTerm}`, 'i');
  return {
    djs: Object.values(state.entities.djs).filter(
      (dj) =>
        Boolean(searchTerm) &&
        dj.name.match(regex)
    ),
    genres: Object.values(state.entities.genres),
    events: Object.values(state.entities.events),
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
