import React, { useEffect } from "react";

const DjImagePreview = ({ photoUrl, name, nationality, genre }) => {
  const djImg = new Image();
  djImg.src = photoUrl;
  const [width, height] = [djImg.naturalWidth, djImg.naturalHeight];

  let shouldScale = height > width;

  let wrapStyle = shouldScale ? {
    backgroundImage: `url(${photoUrl})`
  } : {
    backgroundImage: 'none'
  }

  useEffect(() => {
    shouldScale = height > width;
  });

  return (
    <article className="dj-disp">
      <figure className="img-wrap" style={wrapStyle}>
        <img src={photoUrl} alt={name} id="dj-image" className={shouldScale ? "dj-image-tall" : ""}/>
      </figure>
      <h1 id="disp-name">{name}</h1>
      <span id="disp-banner">
        <h2 id="disp-country">
          <small>Country /</small>
          <br />
          {nationality.split("  ").reverse().join(" ").replace('undefined,', '')}
        </h2>
        <h2 id="disp-genre">
          <small>Genre(s) /</small>
          <br />
          {genre}
        </h2>
      </span>
    </article>
  );
};

export default DjImagePreview;
