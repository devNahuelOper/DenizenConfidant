import React from 'react';
import { Link } from 'react-router-dom';
import { TitleComponent } from '../title_component.jsx';

class GenreShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drop: false
    }
    this.clicker = this.clicker.bind(this);
    this.leave = this.leave.bind(this);
  }

  componentDidMount() {
    this.props.fetchGenre(this.props.match.params.genreId);
    this.props.fetchDjs();
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    const search = document.getElementById('search');
    const searchbar = document.getElementsByClassName('search-container')[0];
    search.onclick = function () {
      searchbar.style.display = 'block';
      search.style.backgroundColor = 'white';
      search.style.color = 'black';
      search.style.borderBottom = '2px solid white';
    }
    window.onclick = function (e) {
      let inSearchbar = searchbar.contains(e.target);
      let inSearch = search.contains(e.target);
      if (inSearchbar || inSearch) {
        return;
      }
      searchbar.style.display = 'none';
      search.style.backgroundColor = 'transparent';
      search.style.color = 'currentColor';
      search.style.borderBottom = 'unset';
    }
  }

  clicker(e) {
    this.setState({ "drop": true });
  }

  leave(e) {
    this.setState({ "drop": false });
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
        <div 
          id={`${genre.name.toLowerCase().split('-').join('')}-container`}
        className="genreshow-nav-container" 
        style={{backgroundImage: `url("${genre.photoUrl}")`}}
        >
          <section className="genre-nav">
            <nav>
              <Link to="/"><img src={window.logoUrl} id="logo" /></Link>
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
        <div className="genre-subnav-container">
          <section className="genre-subnav">
            <ul>
              <li><Link to="/genres">All</Link></li>
              <li><Link className="form" to={`/genres/${genre.id}`}>{genre.name}</Link></li>
              <li><Link to="/">Take me back home</Link></li>
            </ul>
          </section>
            <div className="subnav-toggle" id={this.state.drop ? "expand" : "normal"}>
              <button className="subnav-drop" onFocus={this.clicker} onBlur={this.leave}> <span>{genre.name} <small>⬇︎</small></span>
                <ul className={this.state.drop ? "reveal" : "hide"}>
                  <li><Link className="log-link" to="/genres">All</Link></li>
                  <li><Link className="log-link" onClick={this.leave} to="/">Take me back home</Link></li>
                </ul>
              </button>
            </div>
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
              <li id="dj-link" key={artist}><Link to={`/djs/${ids[genre.artists.indexOf(artist)]}`}>{artist}</Link></li>
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