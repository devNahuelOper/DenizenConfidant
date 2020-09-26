import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import DjIndexItem from './dj_index_item';
import SubnavToggle from '../subnav/subnav';
import NavBar from '../navbar/navbar';
import { toggleSearch } from '../../util/search_util';

class DjIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDjs();
    this.props.fetchGenres();
    toggleSearch();
    window.scrollTo(0, 0);
  }

  render() {
    const { djs } = this.props;
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return (
      <div className="djs-index">
        <header>
          <div className="djs-nav-container">
            <NavBar title="DJs" entity="DJ"/>
          </div>
        </header>
        <div className="djs-subnav-container">
          <section className="djs-subnav">
            <ul>
              <li><Link className="form" to="/djs">All</Link></li>
              <li><Link to="/">Take me back home</Link></li>
              <li id="pending"><Link to='/djs/new'>Create an artist profile</Link></li>
            </ul>
          </section>
          <SubnavToggle
            title="All"
            labels={["Take me back home", "Create an artist profile"]}
            paths={["/", "/djs/new"]} />
        </div>
        <div className="djs-container">
          <nav className="dj-directory">
            {alpha.map(letter => 
            <h1 id={`dir-${letter}`} key={letter}>
            <HashLink to={`djs#dj-sort-${letter}`}>{letter}</HashLink><b>/</b></h1>
              )}
          </nav>
          <section className="djs">
            {alpha.map(letter => 
              <span key={letter} className="dj-sort" id={`dj-sort-${letter}`}>
              <h1 id="first-char">{letter}</h1>
              <ul id={`djlist-${letter}`} className="djlist">
                 {Object.values(djs).filter(dj => dj.name.charAt(0).toUpperCase() === letter).map(dj =>
                   <DjIndexItem key={dj.id} value={dj.name} dj={dj} />
                  )}
              </ul>
            </span>
              )}
          </section>
        </div>
      </div>
    )
  }
}


export default DjIndex;