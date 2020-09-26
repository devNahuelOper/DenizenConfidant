import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({title, hasLinks = false, entity}) => {

  return (
    <section className="navbar" id={`${entity.toLowerCase()}s-nav`}>
      <nav>
        <Link to="/" title="Home"><img src={window.logoUrl} id="logo" /></Link>
        <ul id="links">
          <li><Link to="/djs">DJs</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/genres">Music</Link></li>
          <li><button id="search">Search</button></li>
        </ul>
      </nav>

     { hasLinks ?
      <section className={`${entity.toLowerCase()}show-header`}>
        <Link to={`/${entity.toLowerCase()}s`}><img id="prev" src={window.prevUrl} alt="Back" /> {entity}s</Link>
        {/* <h1>{title}</h1> */}
        <h2>{title}</h2>
      </section>
     :
       <h1>{title}</h1>
      }
    </section>
  )
}

export default NavBar;