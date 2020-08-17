import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class CreateDjForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: '',
      nationality: ''
    }
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const search = document.getElementById('search');
    const searchbar = document.getElementsByClassName('search-container')[0];
    search.onclick = function () {
      searchbar.style.display = 'block';
      search.className = 'show-search';
    }
    window.onclick = function (e) {
      let inSearchbar = searchbar.contains(e.target);
      let inSearch = search.contains(e.target);
      if (inSearchbar || inSearch) {
        return;
      }
      searchbar.style.display = 'none';
      search.className = 'hide-search';
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  render() {
    const { name, genre, nationality } = this.state;
    return (
      <div className="dj-index" id="create-dj">
        <div className="djs-nav-container">
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
            <h1>DJs</h1>
          </section>
        </div>
        <div className="djs-subnav-container">
          <section className="djs-subnav">
            <ul>
              <li><Link to="/djs">All</Link></li>
              <li><Link to="/">Take me back home</Link></li>
              <li id="pending"><Link className="form" to='/djs'>Create an artist profile</Link></li>
            </ul>
          </section>
          <SubnavToggle />
        </div>
        <div className="dj-requirements">
          <section id="requirements">
            <h1>So you want to create an artist profile? <br/>
              There are two criteria you have to meet:
            </h1>
            <br/>
            <ul>
              <li>
                <h2>1. You must have performed at a public venue or had your music charted on DC.</h2>
                <p>This does not include your cousin's barmitzvah, or that house warming party where you were in charge of the playlist. <br/>
                  Actually you could be just about anybody and create a profile. This is just here to
                  fill in space for styling purposes. Even a ferret could create an artist profile.
                </p>
              </li>
              <li>
                <h2>2. You must be a registered DC member.</h2>
                <p>This criteria does apply. No ifs ands or buts about it.
                  Don't have a profile? Signup <Link to="/signup">Here</Link>.
                </p>
              </li>
            </ul>
          </section>
        </div>
        <div className="dj-form-container">
          <div className="form-wrap">
            <h1>Create an artist profile.</h1>
            <hr/>
            <p>
              Artist name should be submitted exactly as it is billed on flyers. <br/>
              Please use correct capitalization and double check your spelling.
            </p>

            <form className="dj-form">
              <ul className="new-dj-formlist">
                <li>
                  <label htmlFor="name">Enter your artist name / <br/>
                    <input type="text"
                    className="text-input"
                    value={name}
                    onChange={this.update('name')}/>
                  </label>
                </li>
                <li>
                  <label>Country / <br />
                    <select name="Nationality" id="nationality-select" value={nationality || 'United States'} onChange={this.update('nationality')}>
                      <option value="--Select a country--" disabled={true}>--Select a country--</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Canada">Canada</option>
                      <option value="China">China</option>
                      <option value="France">France</option>
                      <option value="Germany">Germany</option>
                      <option value="Italy">Italy</option>
                      <option value="Japan">Japan</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Spain">Spain</option>
                      <option value="Sweden">Sweden</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                    </select>
                  </label>
                </li>
                <li>
                  <label htmlFor="Genre">Musical Style / <br/>
                    <select name="Genre" id="genre-select" value={genre || '--Select a style--'} onChange={this.update('genre')}>
                      <option value="--Select a style--" disabled={true}>--Select a style--</option>

                    </select>
                  </label>
                </li>
                <li>
                  {/* <input id="submit-dj" type="submit" value="Create"/> <br/> */}
                  <span id="submit-dj">Create</span>
                  <br/>
                  <p><i>Under Construction</i></p>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    )
  }
};

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
        <button className="subnav-drop" onFocus={this.clicker} onTap={this.clicker} onBlur={this.leave}> <span>Create and artist profile <small>⬇︎</small></span>
          <ul className={this.state.drop ? "reveal" : "hide"}>
            <li><Link className="log-link" onClick={this.leave} to="/djs">All</Link></li>
            <li><Link className="log-link" onClick={this.leave} to="/">Take me back home</Link></li>
          </ul>
        </button>
      </div>
    )
  }
}


export default withRouter(CreateDjForm);