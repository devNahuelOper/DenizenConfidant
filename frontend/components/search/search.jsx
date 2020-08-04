import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDjs } from '../../actions/dj_actions';
import { fetchGenres } from '../../actions/genre_actions';
import { fetchEvents } from '../../actions/event_actions';



class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      djs: [],
      genres: [],
      events: [],
      searchTerm: ''
    }
    this.editSearchTerm = this.editSearchTerm.bind(this);
    this.djSearch = this.djSearch.bind(this);
    this.genreSearch = this.genreSearch.bind(this);
    this.eventSearch = this.eventSearch.bind(this);
  }

  componentDidMount() {
    this.props.fetchDjs().then(djs => this.setState({ djs: Object.values(djs.djs) }));
    this.props.fetchGenres().then(genres => this.setState({ genres: Object.values(genres.genres)}));    
    this.props.fetchEvents().then(events => this.setState({ events: Object.values(events.events)}));    
  }

  editSearchTerm(e) {
    this.setState({searchTerm: e.target.value})
  }

  djSearch() {
    return this.state.djs.filter(dj => dj.name.toLowerCase().startsWith(this.state.searchTerm.toLowerCase())); 
  }
  
  genreSearch() {
    return this.state.genres.filter(genre => genre.name.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()));
  }

  eventSearch() {
    return this.state.events.filter(event => event.name.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()));
  }

  render() {
    return (
      <div className="search-container">
        <div id="searchbar" >
        <form id="search-form" onSubmit={this.djSearch}>
          <input type="text" id="search-input" 
            value={this.state.searchTerm}
            onChange={this.editSearchTerm}
            placeholder="DJs, Genres, Events"
          />
          <div id="search-button-container">
            <button id="search-button">Submit</button>
          </div>
          <div
            style={this.state.searchTerm.length ? { display: 'block' } : { display: 'none' }}
          >
          <ul id="searchlist">
            <li><DjQueryContainer djs = {this.djSearch()}/></li>
            <li><GenreQueryContainer genres = {this.genreSearch()}/></li>
            <li><EventQueryContainer events = {this.eventSearch()}/></li>
          </ul>
          </div>
          </form>
        </div>
       
      </div>
    )
  }
}

class DjQueryContainer extends React.Component {
  render() {
    return (
      <div id="dj-query-container">
        {this.props.djs.map(dj => <DjQuery dj= {dj}/>)}
      </div>
    )
  }
}


class GenreQueryContainer extends React.Component {
  render() {
    return (
      <div id="genre-query-container">
        {this.props.genres.map(genre => <GenreQuery genre={genre} />)}
      </div>
    )
  }
}

class EventQueryContainer extends React.Component {
  render() {
    return (
      <div id="event-query-container">
        {this.props.events.map(event => <EventQuery event={event} />)}
      </div>
    )
  }
}

class DjQuery extends React.Component {
  render() {
    return (
      <Link to={`/djs/${this.props.dj.id}`}>
        <div className="query-item" id="dj-query-item">
        <strong>{this.props.dj.name}</strong> <small>DJ</small>
      </div>
      </Link >
    )
  }
}

class GenreQuery extends React.Component {
  render() {
    return (
      <Link to={`/genres/${this.props.genre.id}`}>
        <div className="query-item" id="genre-query-item">
          <strong>{this.props.genre.name}</strong> <small>Genre</small>
        </div>
      </Link >
    )
  }
}

class EventQuery extends React.Component {
  render() {
    return (
      <Link to={`/events/${this.props.event.id}`}>
        <div className="query-item" id="event-query-item">
          <strong>{this.props.event.name}</strong> <small>Event</small>
        </div>
      </Link >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    djs: Object.values(state.entities.djs),
    genres: Object.values(state.entities.genres),
    events: Object.values(state.entities.events)
  }
};

const mapDispatchToProps = dispatch => ({
  fetchDjs: () => dispatch(fetchDjs()),
  fetchGenres: () => dispatch(fetchGenres()),
  fetchEvents: () => dispatch(fetchEvents())
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);