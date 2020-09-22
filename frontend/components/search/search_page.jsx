import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { TitleComponent } from '../title_component.jsx';
import Search from './search';
import { fetchDjs } from '../../actions/dj_actions';
import { fetchGenres } from '../../actions/genre_actions';
import { fetchEvents } from '../../actions/event_actions';
import {
  formatDateStyle
} from '../../util/date_util';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: $('#search-input').val(),
    }
  }

  componentDidMount() {
    $(document).trigger('click');
    $('.search-main #search-input').val(this.state.searchTerm);
    this.props.fetchDjs();
    this.props.fetchEvents();
    this.props.fetchGenres();
  }

  render() {
    const { djs, events, genres } = this.props;
    const allResults = djs.length + events.length + genres.length;
    return (
      <React.Fragment>
        <TitleComponent title='DC: Search' />
        <div className="search-page">
          <header>
            <div id="nav-container">
              <section id="navbar">
                <nav>
                  <Link to="/"><img src={window.logoUrl} id="logo" /></Link>
                  <ul id="links">
                    <li><Link to="/djs">DJs</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/genres">Music</Link></li>
                    <li><button id="search" className="show-search">Search</button></li>
                  </ul>
                </nav>
                <h1>Search</h1>
              </section>
            </div>
          </header>
          <div className="search-main">
            <Search searchTerm={this.state.searchTerm} />
            <section className="results">
             { djs.length > 0 &&
             <div className="dj-results">
                <h1>DJs</h1>
                <ul>
                  {djs.map((dj, i) => 
                  <li key={i}>
                    <Link to={`/djs/${dj.id}`}>{dj.name}</Link>
                  </li>
                  )}
                </ul>
              </div>
            }
             { events.length > 0 &&
              <div className="event-results">
                <h1>Events</h1>
                <ul>
                  {events.map((event, i) =>
                    <li key={i}>
                      <Link to={`/events/${event.id}`}>{event.name}</Link>
                      <span> on {formatDateStyle(event.date).split(',')[1]}</span>
                    </li>
                  )}
                </ul>
              </div>
            }
               { genres.length > 0 &&
              <div className="genre-results">
               <h1>Genres</h1>
                <ul>
                  {genres.map((genre, i) =>
                    <li key={i}>
                      <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
                    </li>
                  )}
                </ul>
              </div>
                }
                { allResults === 0 &&
                  <span id="no-results">Your search <b>{this.state.searchTerm}</b> returned 0 results.</span>
                }
            </section>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  let searchTerm = $('#search-input').val();
  return {
    djs: Object.values(state.entities.djs).filter(dj => dj.name.toLowerCase().startsWith(searchTerm.toLowerCase())),
    genres: Object.values(state.entities.genres).filter(genre => genre.name.toLowerCase().startsWith(searchTerm.toLowerCase())),
    events: Object.values(state.entities.events).filter(event => event.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
  }
};

const mapDispatchToProps = dispatch => ({
  fetchDjs: () => dispatch(fetchDjs()),
  fetchGenres: () => dispatch(fetchGenres()),
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);