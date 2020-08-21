import React from 'react';
import { Link } from 'react-router-dom';
import GenreIndexItem from './genre_index_item';
import {
  toggleSearch
} from '../../util/search_util';

class GenreIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGenres();
    toggleSearch();
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
                <li><Link to="/genres">Music</Link></li>
                <li><button id="search">Search</button></li>
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
          <SubnavToggle />
        </div>
        <div className="genres-container">        
          <section className="genres">
            <h1>Electronic Music Genres  <small>(non-exhaustive list)</small></h1>
            <hr />
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

class SubnavToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drop: false
    }
    this.clicker = this.clicker.bind(this);
    this.leave = this.leave.bind(this);
  }

  clicker(e) {
    this.setState({ "drop": true });
  }

  leave(e) {
    this.setState({ "drop": false });
  }

  render() {
    return (
      <div className="subnav-toggle" id={this.state.drop ? "expand" : "normal"}>
        <button className="subnav-drop" onFocus={this.clicker} onBlur={this.leave}> <span>All <small>⬇︎</small></span>
          <ul className={this.state.drop ? "reveal" : "hide"}>
            <li><Link className="log-link" onClick={this.leave} to="/">Take me back home</Link></li>
          </ul>
        </button>
      </div>
    )
  }
}


export default GenreIndex;