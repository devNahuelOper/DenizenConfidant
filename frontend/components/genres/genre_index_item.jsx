import React from 'react';
import { Link } from 'react-router-dom';

const GenreIndexItem = ({ genre }) => (
  <li className="genrelist-item">
    <article className="genre">
      <Link id="genre-name" to={`genres/${genre.id}`}>
      <img className="genre-avatar" src={genre.photoUrl} alt={genre.name}/> &nbsp;
       <strong>{genre.name}</strong>
        </Link>
    </article>
  </li>
)

export default GenreIndexItem;

// style = {{ backgroundImage: image_url("acidhouse.png") }}