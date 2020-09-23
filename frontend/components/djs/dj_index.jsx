import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import DjIndexItem from './dj_index_item';
import SubnavToggle from '../subnav/subnav';
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
            <section className="djs-nav">
              <nav>
                <Link to="/" title="Home"><img src={window.logoUrl} id="logo" /></Link>
                <ul id="links">
                  <li><Link to="/djs">DJs</Link></li>
                  <li><Link to="/events">Events</Link></li>
                  <li><Link to="/genres">Music</Link></li>
                  <li><button id="search">Search</button></li>
                </ul>
              </nav>
              <h1>DJs</h1>
            </section>
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
          {/* <SubnavToggle /> */}
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

// class SubnavToggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       drop: false
//     }
//     this.clicker = this.clicker.bind(this);
//     this.leave = this.leave.bind(this);
//     this.mobileDrop = this.mobileDrop.bind(this);
//   }

//   clicker(e) {
//     this.setState({ "drop": true });
//   }

//   leave(e) {
//     this.setState({ "drop": false });
//   }

//   mobileDrop(e) {
//     e.preventDefault();
//     this.setState({ "drop": true });status
//     $('body').on('click', e => {
//       const drop = $('.subnav-drop');
//       if (drop !== e.currentTarget) {
//         this.leave();
//       }
//     })
   
//   }

//   render() {
//     return (
//       <div className="subnav-toggle" id={this.state.drop ? "expand" : "normal"}>
//         <button className="subnav-drop" onFocus={this.clicker} onBlur={this.leave}> <span onClick={this.mobileDrop}>All <small>⬇︎</small></span>
//           <ul className={this.state.drop ? "reveal" : "hide"}>
//             <li><Link className="log-link" onClick={this.leave} to="/">Take me back home</Link></li>
//             <li><Link className="log-link" onClick={this.leave} to="/djs/new">Create an artist profile</Link></li>
//           </ul>
//         </button>
//       </div>
//     )
//   }
// }

export default DjIndex;