import React from 'react';
import { Link } from 'react-router-dom';

const GenreIndexItem = ({ genre }) => (
  <li className="genrelist-item" key={genre.id}>
    <article className="genre">
      <Link className="genre-name" to={`genres/${genre.id}`}>
      <img className="genre-avatar" src={genre.photoUrl} alt={genre.name}/> &nbsp;
       <strong id={genre.name.split('-')[0].toLowerCase()}>{genre.name}</strong>
        </Link>
    </article>
  </li>
)

export default GenreIndexItem;

