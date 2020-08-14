import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class CreateDjForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="create-dj">
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
              <li><Link className="form" to="/djs">All</Link></li>
              <li><Link to="/">Take me back home</Link></li>
              <li id="pending"><Link to='/djs'>Create an artist profile <br /> <small>Coming Soon!</small></Link></li>
            </ul>
          </section>
          <SubnavToggle />
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
        <button className="subnav-drop" onFocus={this.clicker} onTap={this.clicker} onBlur={this.leave}> <span>All <small>⬇︎</small></span>
          <ul className={this.state.drop ? "reveal" : "hide"}>
            <li><Link className="log-link" onClick={this.leave} to="/">Take me back home</Link></li>
            <li><Link className="log-link" onClick={this.leave} to="/signup">Create and artist profile</Link></li>
          </ul>
        </button>
      </div>
    )
  }
}


export default withRouter(CreateDjForm);