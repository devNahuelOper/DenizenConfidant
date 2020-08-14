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
      </div>
    )
  }
};

export default withRouter(CreateDjForm);