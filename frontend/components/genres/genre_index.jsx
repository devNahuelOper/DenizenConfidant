import React from 'react';
import { Link } from 'react-router-dom';
import GenreIndexItem from './genre_index_item';

class GenreIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGenres();
  }

  render() {
    const { genres } = this.props;

    return (
      <div className="genre-index">
        <div className="genre-nav-container">
          <section className="genre-nav">
            <nav>
              <Link to="/"><img src={window.logoUrl} id="logo" /></Link>
              <ul id="links">
                <li><Link to="/djs">DJs</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li>Music</li>
                <li>Search</li>
              </ul>
            </nav>
            <h1>Genres</h1>
          </section>
        </div>
        <div className="genre-subnav-container">
          <section className="genre-subnav">
            <ul>
              <li><Link className="form" to="/genres">All</Link></li>
              {/* <li><Link to="/signup">Register</Link></li> */}
              <li><Link to="/">Take me back home</Link></li>
            </ul>
          </section>
        </div>
        <div className="genres-container">
          <section className="genres">
            <ul className="genre-list">
              {genres.map(genre =>
              <GenreIndexItem key={genre.id} genre={genre}/>
                )}
            </ul>
          </section>
        </div>
      </div>
    )
  }
}

export default GenreIndex;