import React from 'react';
import { Link } from 'react-router-dom';
import { TitleComponent } from '../title_component.jsx';
import SubnavToggle from '../subnav/subnav';
import { toggleSearch } from '../../util/search_util';

class GenreShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGenre(this.props.match.params.genreId);
    this.props.fetchDjs();
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    toggleSearch();
  }

  render() {
    if (!this.props.genre) {
      return null;
    }
    const { genre } = this.props;
    const ids = genre.artist_ids;
    const length = genre.artists.length / 2;
    return (
      <React.Fragment>
        <TitleComponent title={`DC: ${genre.name}`} />
      <div className="genre-index" id="genre-show">
        <header>
          <div 
            id={`${genre.name.toLowerCase().split('-').join('')}-container`}
            className="genreshow-nav-container" 
            style={{backgroundImage: `url("${genre.photoUrl}")`}}
          >
            <section className="genres-nav">
              <nav>
                <Link to="/" title="Home"><img src={window.logoUrl} id="logo" /></Link>
                <ul id="links">
                  <li><Link to="/djs">DJs</Link></li>
                  <li><Link to="/events">Events</Link></li>
                  <li><Link to="/genres">Music</Link></li>
                  <li><button id="search">Search</button></li>
                </ul>
              </nav>
              <section className="genreshow-header">
                <Link to='/genres'><img id="prev" src={window.prevUrl} alt="Back" /> Genres</Link>
                <h1>{genre.name}</h1>
              </section>
            </section>
          </div>
        </header>
        <div className="genre-subnav-container">
          <section className="genre-subnav">
            <ul>
              <li><Link to="/genres">All</Link></li>
              <li><Link className="form" to={`/genres/${genre.id}`}>{genre.name}</Link></li>
              <li><Link to="/">Take me back home</Link></li>
            </ul>
          </section>
            <SubnavToggle
              title={genre.name}
              labels={["All", "Take me back home"]}
              paths={["/genres", "/"]} 
              />
        </div>

        <div className="genre-main">
          <section className="description-container">
            <h1>Overview</h1>
            <hr/>
            <div id="genre-bio">
              <ul>
              {genre.description.split('  ').map((par, i) =>
                <li key={i}>{par}<br/></li> 
                )} 
              </ul>
            </div>
          </section>
          <section className="examples">
            <h1>{genre.name} DJs</h1>
            <hr/>
            <ul className="example-list">
              {genre.artists.slice(0, length).sort().map(artist => 
              <li className={artist.length >= 20 ? 'long-link' : 'normal-link'} id="dj-link" key={artist}><Link to={`/djs/${ids[genre.artists.indexOf(artist)]}`}>{artist}</Link></li>
                )}
            </ul>
          </section>
        </div>
      </div>
      </React.Fragment>
    )
  }
}

export default GenreShow;