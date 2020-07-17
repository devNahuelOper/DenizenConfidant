import React from 'react';
import { Link } from 'react-router-dom';



const DjIndexItem = ({dj}) => (

  <li className="djlist-item">
    <article className="dj">
      <Link id="dj-name" to={`djs/${dj.id}`}>{(dj.name === 'Ran D') || (dj.name === 'Noisuf X') ? `${dj.name.split(' ')[0]}-${dj.name.split(' ')[1]}` : dj.name}</Link>
    </article>
  </li>
)

export default DjIndexItem;

