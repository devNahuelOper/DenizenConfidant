import React from "react";
import { Link } from "react-router-dom";
import { extractSongTitle, getPhoto } from "../../util/url_util";

const Playlist = ({ djs }) => {
  if (!djs) return null;

  djs = _.map(djs, (dj) => {
    let photo = dj.photoUrl ? dj.photoUrl : getPhoto(dj);
    return {
      ...dj,
      song: _.sample(dj.songsUrl),
      photo,
      get label() {
        return `${this.name} - ${extractSongTitle(this.song)}`;
      }
    };
  });

  const labelLength = (text) => text.length >= 26 ? "longPlaylistLabel" : "playlistLabel";

  return (
    <div className="beatwrap playlist-wrap">
      <ul className="beatlist randlist">
        {djs.map((dj) => (
          <li key={dj.id} className="song">
            <article>
              <img src={dj.photo} alt={dj.name} />
              <Link
                id={`${dj.name.toLowerCase()}-link`}
                className={labelLength(dj.label)}
                to={`/djs/${dj.id}`}
                title={dj.name}
              >
                <span>{dj.label}</span>
              </Link>
              <audio src={dj.song} controls></audio>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;