import React from 'react';
import { Link } from 'react-router-dom';
import { TitleComponent } from '../title_component.jsx';
import Search from './search';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
            <Search />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default SearchPage;