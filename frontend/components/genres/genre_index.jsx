import React from 'react';
import { Link } from 'react-router-dom';
import GenreIndexItem from './genre_index_item';
import SubnavToggle from '../subnav/subnav';
import NavBar from '../navbar/navbar';
import { toggleSearch } from '../../util/search_util';

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
        <header>
          <div className="genre-nav-container">
            <NavBar title="Genres" entity="genre"/>
          </div>
        </header>
        <div className="genre-subnav-container">
          <section className="genre-subnav">
            <ul>
              <li><Link className="form" to="/genres">All</Link></li>
              <li><Link to="/">Take me back home</Link></li>
            </ul>
          </section>
          <SubnavToggle
            title="All"
            labels={["Take me back home"]}
            paths={["/"]} />
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


export default GenreIndex;