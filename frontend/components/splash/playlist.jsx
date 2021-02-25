import React from "react";
import { Link } from "react-router-dom";

const Playlist = ({ djs }) => {
  if (!djs) return null;

  return (
    <div className="beatwrap playlist-wrap">
      <ul className="beatlist playlist">
        {djs.map(dj => 
        <li key={dj.id} className="song">
          <article>
            <img src={dj.photoUrl} alt={dj.name}/>
            <Link
              id={`${dj.name.toLowerCase()}-link`}
              to={`/djs/${dj.id}`}
              title={dj.name}
              >
            </Link>
          </article>
        </li>
          )}
      </ul>
    </div>
  )
}