import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TitleComponent } from '../title_component.jsx';

class DjShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: this.props.dj.name,
      // genre: this.props.dj.genre,
      // songsUrl: this.props.dj.songsUrl
      drop: false
    }
    this.clicker = this.clicker.bind(this);
    this.leave = this.leave.bind(this);
  }


  componentDidMount() {
    this.props.fetchDj(this.props.match.params.djId);
    this.props.fetchGenres();
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
    if (!this.props.dj) {
      return null;
    }
    const { dj } = this.props;
    const first = dj.name.split(' ')[0];
    const second = dj.name.split(' ')[1];
    const hyphen = `${first}-${second}`;
    return (
      <React.Fragment>
        <TitleComponent title={`DC: ${dj.name}`} />
      <div className="djs-index" id="dj-show">
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
                <li><Link to="/genres">Music</Link></li>
                <li><button id="search">Search</button></li>
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
              <li><Link to="/djs">All</Link></li>
              <li><Link className="form" to={`/djs/${dj.id}`}>{dj.name}</Link></li>
              <li><Link to="/">Take me back home</Link></li>
              <li id="pending"><Link to='/djs'>Create an artist profile <br /> <small>Coming Soon!</small></Link></li>
            </ul>
          </section>
            {/* <SubnavToggle /> */}
            <div className="subnav-toggle" id={this.state.drop ? "expand" : "normal"}>
              <button className="subnav-drop" onFocus={this.clicker} onTap={this.clicker} onBlur={this.leave}> <span>{dj.name} <small>⬇︎</small></span>
                <ul className={this.state.drop ? "reveal" : "hide"}>
                  <li><Link className="log-link" to="/djs">All</Link></li>
                  <li><Link className="log-link" onClick={this.leave} to="/">Take me back home</Link></li>
                  <li><Link className="log-link" onClick={this.leave} to="/signup">Create and artist profile</Link></li>
                </ul>
              </button>
            </div>
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
                  {dj.genre.split(' ').map(gen => 
                 
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
              {dj.bio}
            </p>
            {/* <img id="dj-image" src={`https://denizen-confidant-seeds.s3.amazonaws.com/${dj.name.toLowerCase().split(' ').join('')}.png`} /> */}
          </section>
          <section className="playlist">
            <h1>Tracks by {dj.name}</h1>
            <hr />
            <ul className="songs">
              {dj.songsUrl.map(song =>
              <li className="song" key={dj.songsUrl.indexOf(song)}>
                <span id="song-title">
                    {song.slice(song.lastIndexOf('/') + 1, song.lastIndexOf('.')).split('+').join(' ')}
                </span>
                <hr/>
                <audio src={song} controls></audio>
              </li>
                )}
            </ul>
          </section>
        </div>
      </div>
      </React.Fragment>
    )
  }
}

// class SubnavToggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       drop: false
//     }
//     this.clicker = this.clicker.bind(this);
//     this.leave = this.leave.bind(this);
//   }

//   clicker(e) {
//     this.setState({ "drop": true });
//   }

//   leave(e) {
//     this.setState({ "drop": false });
//   }

//   render() {
//     return (
//       <div className="subnav-toggle" id={this.state.drop ? "expand" : "normal"}>
//         <button className="subnav-drop" onFocus={this.clicker} onTap={this.clicker} onBlur={this.leave}> <span>All <small>⬇︎</small></span>
//           <ul className={this.state.drop ? "reveal" : "hide"}>
//             <li><Link className="form" to={`/djs/${dj.id}`}>{dj.name}</Link></li>
//             <li><Link className="log-link" onClick={this.leave} to="/">Take me back home</Link></li>
//             <li><Link className="log-link" onClick={this.leave} to="/signup">Create and artist profile</Link></li>
//           </ul>
//         </button>
//       </div>
//     )
//   }

// }

export default DjShow;