import React from 'react';
import { Link } from 'react-router-dom';
import { TitleComponent } from '../title_component.jsx';
// import SubnavToggle from '../subnav/subnav';
import { toggleSearch } from '../../util/search_util';

class DjShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drop: false
    }
    this.clicker = this.clicker.bind(this);
    this.leave = this.leave.bind(this);
    this.mobileDrop = this.mobileDrop.bind(this);
  }


  componentDidMount() {
    this.props.fetchDj(this.props.match.params.djId);
    this.props.fetchGenres();
    // this.props.fetchGenres().then(genres => this.setState({genres: Object.values(genres.genres)}));
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    toggleSearch();
  }

  clicker(e) {
    this.setState({ "drop": true });
  }

  leave(e) {
    this.setState({ "drop": false });
  }

  mobileDrop(e) {
    e.preventDefault(); 
    this.setState({ "drop": true }); 
    $('body').on('click', e => {
      const drop = $('.subnav-drop');
      if (drop !== e.currentTarget) {
        this.leave();
      }
    })
  }

  render() {
    if (!this.props.dj) {
      return null;
    }
    const { dj } = this.props;
    const first = dj.name.split(' ')[0];
    const second = dj.name.split(' ')[1];
    const hyphen = `${first}-${second}`;
    const noAttach = {
        backgroundImage: `url("${`https://denizen-confidant-seeds.s3.amazonaws.com/${dj.name.toLowerCase().split(' ').join('')}.png`}")` 
    }
    const yesAttach = {
      backgroundImage: `url("${dj.photoUrl}")`
    }
    return (
      <React.Fragment>
        <TitleComponent title={`DC: ${dj.name}`} />
      <div className="djs-index" id="dj-show">
        <header>
          <div 
            id={`${dj.name.toLowerCase().split(' ').join('')}-container`}
            className="djshow-nav-container" 
            style={!dj.photoUrl ? noAttach : yesAttach}
            >
            <section className="djs-nav">
              <nav>
                <Link to="/"><img src={window.logoUrl} id="logo" /></Link>
                <ul id="links">
                  <li><Link to="/djs">DJs</Link></li>
                  <li><Link to="/events">Events</Link></li>
                  <li><Link to="/genres">Music</Link></li>
                  <li><button id="search">Search</button></li>
                </ul>
              </nav>
              <section id="djshow-header" className="eventshow-header">
                <Link to='/djs'><img id="prev" src={window.prevUrl} alt="Back" /> DJs</Link>
                  <h1 id={dj.name.length >= 15 ? 'longDj' : 'normalDj'}>{(dj.name === 'Ran D') || (dj.name === 'Noisuf X') ? hyphen : dj.name}</h1>
              </section>
            </section>
          </div>
        </header>
        <div className="djs-subnav-container">
          <section className="djs-subnav">
            <ul>
              <li><Link to="/djs">All</Link></li>
              <li><Link className="form" to={`/djs/${dj.id}`}>{dj.name}</Link></li>
              <li><Link to="/">Take me back home</Link></li>
              <li id="pending"><Link to='/djs/new'>Create an artist profile</Link></li>
            </ul>
          </section>
            <div className="subnav-toggle" id={this.state.drop ? "expand" : "normal"}>
              <button className="subnav-drop" onFocus={this.clicker}  onBlur={this.leave}> <span onClick={this.mobileDrop}>{dj.name} <small>⬇︎</small></span>
                <ul className={this.state.drop ? "reveal" : "hide"}>
                  <li><Link className="log-link" to="/djs">All</Link></li>
                  <li><Link className="log-link" onClick={this.leave} to="/">Take me back home</Link></li>
                  <li><Link className="log-link" onClick={this.leave} to="/djs/new">Create an artist profile</Link></li>
                </ul>
              </button>
            </div>
        </div>
        <div className="djsubheader-container">
          <section className="djshow-subheader">
            <ul className="details">
              <li>
                <small>Country /</small><br/>
                {dj.nationality.split(' ').reverse().join(' ')}
              </li>
              <li>
                <small>Genre(s) /</small> <br/>
                {/* {dj.genre} */}
                  {dj.genre.split(' ').filter(String).map(gen => 
                  <Link id="genre-link" key={gen} to={`/genres/${this.props.genres.find(g => g.name === gen).id}`}>{gen}</Link>
                    )}
              </li>
            </ul>
          </section>
        </div>
        <div className="dj-main">
          <section className="bio-container">
            <h1>Biography</h1>
            <hr/>
            <p id="bio">
              {dj.bio ? dj.bio : null}
            </p>
            {/* <img id="dj-image" src={`https://denizen-confidant-seeds.s3.amazonaws.com/${dj.name.toLowerCase().split(' ').join('')}.png`} /> */}
          </section>
          <section className="playlist">
            <h1>Tracks by {dj.name}</h1>
            <hr />
            <ul className="songs">
              {dj.songsUrl ? dj.songsUrl.map(song =>
              <li className="dj-song" key={dj.songsUrl.indexOf(song)}>
                <span id="song-title">
                    {song.slice(song.lastIndexOf('/') + 1, song.lastIndexOf('.')).split('+').join(' ')}
                </span>
                <hr/>
                <audio src={song} controls></audio>
              </li>
                ) : null}
            {dj.trackUrl ? 
            <li className="dj-song">
                <span id="song-title">
                  {dj.trackUrl.slice(dj.trackUrl.lastIndexOf('/') + 1, dj.trackUrl.lastIndexOf('.')).split('+').join(' ')}
                </span>
                <hr/>
                <audio src={dj.trackUrl} controls></audio> 
            </li>
            : null }
            </ul>
          </section>
        </div>
      </div>
      </React.Fragment>
    )
  }
}



export default DjShow;