import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showSearch } from '../../actions/search_actions';

const NavBar = ({title, hasLinks = false, entity, path, label, type = "show", ...props}) => {
  const dispatch = useDispatch();
  const searchBar = useSelector(state => state.ui.searchBar);
  const displaySearch = () => dispatch(showSearch(searchBar));

  return (
    <section className="navbar" id={`${entity.toLowerCase()}s-nav`}>
      <nav>
        <Link to="/" title="Home">
          <img src={window.logoUrl} id="logo" />
        </Link>
        <ul id="links">
          <li>
            <Link to="/djs">DJs</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/genres">Music</Link>
          </li>
          <li>
            <button id="search" onClick={displaySearch}>Search</button>
          </li>
        </ul>
      </nav>

      {hasLinks ? (
        <section className={`${entity.toLowerCase()}${type}-header`}>
          {Array.isArray(path) ? (
            <span className="prev-hold">
              {path.map((pth, i) => (
                <React.Fragment key={i}>
                  <Link to={pth}>
                    <img id="prev" src={window.prevUrl} alt="Back" />
                    {` ${label[i]}`}
                  </Link>
                  {i < path.length - 1 && <> &nbsp; / &nbsp; </>}
                </React.Fragment>
              ))}
            </span>
          ) : (
            <Link to={path}>
              <img id="prev" src={window.prevUrl} alt="Back" /> {label}
            </Link>
          )}

          {entity === "Event" && type === "show" ? (
            <h2 id={title.length >= 20 ? "longH2" : "normalH2"}>{title}</h2>
          ) : (
            <h1 id={title.length >= 15 ? `long${entity}` : `normal${entity}`}>
              {title}
            </h1>
          )}
        </section>
      ) : (
        <h1>{title}</h1>
      )}
      {props.children}
    </section>
  );
}

export default NavBar;