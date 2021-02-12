import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { TitleComponent } from '../title_component.jsx';
import NavBar from '../navbar/navbar';
import { fetchDjs } from '../../actions/dj_actions';
import { fetchGenres } from '../../actions/genre_actions';
import { fetchEvents } from '../../actions/event_actions';
import { formatDateStyle } from '../../util/date_util';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: this.props.searchTerm,
    }
  }

  componentDidMount() {
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
              <NavBar title="Search" entity="search"/>
            </div>
          </header>
          <div className="search-main"> 
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
  // let searchTerm = $('#search-input').val();
    let searchTerm = state.ui.searchBar?.searchTerm || "";
    let regex = new RegExp(`^${searchTerm}`, "i");
    const { djs, events, genres } = state.entities;
  return {
    djs: Object.values(djs).filter(
      (dj) => Boolean(searchTerm) && dj.name.match(regex)
    ),
    genres: Object.values(genres).filter(
      (genre) => Boolean(searchTerm) && genre.name.match(regex)
    ),
    events: Object.values(events).filter(
      (event) => Boolean(searchTerm) && event.name.match(regex)
    ),
    searchTerm
  };
};

const mapDispatchToProps = dispatch => ({
  fetchDjs: () => dispatch(fetchDjs()),
  fetchGenres: () => dispatch(fetchGenres()),
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);