import React from 'react';
import { Link } from 'react-router-dom';
import DjIndexItem from './dj_index_item';

class DjIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDjs();
  }

  render() {
    const { djs } = this.props;
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
      <div className="djs-index">
        <div className="djs-nav-container">
          <section className="djs-nav">
            <nav>
              <Link to="/"><img src={window.logoUrl} id="logo" /></Link>
              <ul id="links">
                <li><Link to="/djs">DJs</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li>Music</li>
                <li>Search</li>
              </ul>
            </nav>
            <h1>DJs</h1>
          </section>
        </div>
        <div className="djs-subnav-container">
          <section className="djs-subnav">
            <ul>
              <li><Link className="form" style={{ color: 'black' }} to="/djs">All</Link></li>
              <li><Link to="/signup">Register</Link></li>
              <li><Link to="/">Take me back home</Link></li>
              <li><Link to='/djs/:id'>Create an artist profile</Link></li>
            </ul>
          </section>
        </div>
        <div className="djs-container">
          <br/><br/>
          <section className="djs">
            {alpha.map(letter => 
            <span className="dj-sort">
              <h1 id="first-char">{letter}</h1>
              <ul id={`djlist-${letter}`} className="djlist">
                 {Object.values(djs).filter(dj => dj.name.charAt(0).toUpperCase() === letter).map(dj =>
                   <DjIndexItem key={dj.id} dj={dj} />
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