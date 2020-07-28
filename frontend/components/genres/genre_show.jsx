import React from 'react';
import { Link } from 'react-router-dom';

class GenreShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGenre(this.props.match.params.genreId);
  }

  render() {
    const { genre } = this.props;

    return (
      <div className="genre-index">
        <div className="genre-nav-container">
          <section className="genre-nav">
            <nav>
              <Link to="/"><img src={window.logoUrl} id="logo" /></Link>
              <ul id="links">
                <li><Link to="/djs">DJs</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/genres">Music</Link></li>
                <li>Search</li>
              </ul>
            </nav>
            <section className="genreshow-header">
              <Link to='/genres'><img id="prev" src={window.prevUrl} alt="Back" /> Events</Link>
              <h2>{genre.name}</h2>
            </section>
          </section>
        </div>
        <div className="genre-subnav-container">
          <section className="genre-subnav">
            <ul>
              <li><Link className="form" to="/genres">All</Link></li>
              <li><Link className="form" to={`/genres/${genre.id}`}>{genre.name}</Link></li>
              <li><Link to="/">Take me back home</Link></li>
            </ul>
          </section>
        </div>

        <div className="genre-main">
          <section className="description-container">
            <p id="genre-bio">
              {genre.description}
            </p>
          </section>
          <section className="examples">
            <ul>
              {genre.artists.map(artist => 
              <li>{artist}</li>
                )}
            </ul>
          </section>
        </div>
      </div>
    )
  }
}

export default GenreShow;