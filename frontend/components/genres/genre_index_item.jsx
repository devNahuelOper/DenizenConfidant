import React from 'react';
import { Link } from 'react-router-dom';

const GenreIndexItem = ({ genre }) => (
  <li className="genrelist-item">
    <article className="genre">
      <Link id="genre-name" to={`genres/${genre.id}`}>{genre.name}</Link>
    </article>
  </li>
)

export default GenreIndexItem;