import React from 'react';
import { Link } from 'react-router-dom';

const DjIndexItem = ({dj}) => (
  <li className="djlist-item">
    <article className="dj">
      <Link id="dj-name" to={`djs/${dj.id}`}>{dj.name === 'Noisuf X' ? 'Noisuf-X' : dj.name}</Link>
    </article>
  </li>
)

export default DjIndexItem;

