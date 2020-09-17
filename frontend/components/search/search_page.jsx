import React from 'react';
import { Link } from 'react-router-dom';
import { TitleComponent } from '../title_component.jsx';
import Search from './search';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: $('#search-input').val()
    }
  }

  componentDidMount() {
    $(document).trigger('click');
    // console.log(this.props);
    $('.search-main #search-input').val(this.state.searchTerm);
    // console.log($('.search-main #search-input').val());
    console.log(this.state);
  }

  componentDidUpdate() {
    console.log(this.state);
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
            <Search searchTerm={this.state.searchTerm}/>
            <section className="results">
              <div className="dj-results">
                <h1>DJs</h1>
              </div>
              <div className="event-results">
                <h1>Events</h1>
              </div>
              <div className="genre-results">
                <h1>Genres</h1>
              </div>
            </section>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default SearchPage;