import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({title}) => {

  return (
    <section className={`${title.toLowerCase()}-nav`} id="navbar">
      <nav>
        <Link to="/"><img src={window.logoUrl} id="logo" /></Link>
        <ul id="links">
          <li><Link to="/djs">DJs</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/genres">Music</Link></li>
          <li><button id="search">Search</button></li>
        </ul>
      </nav>
      <h1>{title}</h1>
    </section>
  )
}

export default NavBar;