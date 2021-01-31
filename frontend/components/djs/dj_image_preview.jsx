import React from "react";

const DjImagePreview = ({ photoUrl, name, nationality, genre }) => (
  <article className="dj-disp">
    <img src={photoUrl} alt={name} />
    <h1 id="disp-name">{name}</h1>
    <span id="disp-banner">
      <h2 id="disp-country">
        <small>Country /</small>
        <br />
        {nationality.split("  ").reverse().join(" ")}
      </h2>
      <h2 id="disp-genre">
        <small>Genre(s) /</small>
        <br />
        {genre}
      </h2>
    </span>
  </article>
);

export default DjImagePreview;
