import React from 'react';
import { Link } from 'react-router-dom';

class DjShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchDj(this.props.match.params.djId);
  }

  render() {
    const { dj } = this.props;
    const first = dj.name.split(' ')[0];
    const second = dj.name.split(' ')[1];
    const hyphen = `${first}-${second}`;
    return (
      <div className="djs-index">
        <div 
          id={`${dj.name.toLowerCase().split(' ').join('')}-container`}
          className="djshow-nav-container" 
          style={{  backgroundImage: `url("${`https://denizen-confidant-seeds.s3.amazonaws.com/${dj.name.toLowerCase().split(' ').join('')}.png`}")`}}>
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
            <section id="djshow-header" className="eventshow-header">
              <Link to='/djs'><img id="prev" src={window.prevUrl} alt="Back" /> DJs</Link>
              <h1>{(dj.name === 'Ran D') || (dj.name === 'Noisuf X') ? hyphen : dj.name}</h1>
            </section>
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
        <div className="djsubheader-container">
          <section className="djshow-subheader">
            <ul className="details">
              <li>
                <small>Country/</small><br/>
                {dj.nationality.split(' ').reverse().join(' ')}
              </li>
              <li>
                <small>Genre(s)/</small> <br/>
                  {dj.genre}
              </li>
            </ul>
          </section>
        </div>
        <div className="dj-main">
          <section className="bio-container">
            <h1>Biography</h1>
            <hr/>
            <p id="bio">
              {dj.bio}
            </p>
            {/* <img id="dj-image" src={`https://denizen-confidant-seeds.s3.amazonaws.com/${dj.name.toLowerCase().split(' ').join('')}.png`} /> */}
          </section>
        </div>
      </div>
    )
  }
}

export default DjShow;