import React from "react";
import { Link } from "react-router-dom";

const FixedDjs = ({ djs }) => {
  if (!djs) return null;

  return (
    <div className="beatwrap">
      <ul className="beatlist">
        <li className="song">
          <article>
            <img
              src={window.gesaffelsteinUrl}
              id="gesaffelstein"
              alt="Gesaffelstein"
            />
            <Link
              id="gesaffelstein-link"
              to={`/djs/${djs["Gesaffelstein"]}`}
              title="Gesaffelstein"
            >
              Gesaffelstein - Depravity
            </Link>
            <audio id="depravity" src="depravity.mp3" controls></audio>
          </article>
        </li>
        <li className="song">
          <article>
            <img src={window.deadmau5Url} id="deadmau5" alt="Deadmau5" />
            <Link
              id="deadmau5-link"
              to={`/djs/${djs["Deadmau5"]}`}
              title="Deadmau5"
            >
              Deadmau5 - S<small>peed</small>V<small>iolence</small>M
              <small>omentum</small>
            </Link>
            <audio id="speed" src="speed.mp3" controls></audio>
          </article>
        </li>
        <li className="song">
          <article>
            <img src={window.noisufUrl} id="noisuf" alt="Noisuf-X" />
            <Link
              id="noisuf-link"
              to={`/djs/${djs["Noisuf-X"]}`}
              title="Noisuf-X"
            >
              Noisuf-X - Count to Seven
            </Link>
            <audio id="cseven" src="cseven.mp3" controls></audio>
          </article>
        </li>
        <li className="song">
          <article>
            <img src={window.nomanaUrl} id="nomana" alt="No Mana" />
            <Link
              id="nomana-link"
              to={`/djs/${djs["No Mana"]}`}
              title="No Mana"
            >
              No Mana - Other Side
            </Link>
            <audio id="otherside" src="otherside.mp3" controls></audio>
          </article>
        </li>
        <li className="song">
          <article>
            <img src={window.kayzoUrl} id="kayzo" alt="Kayzo" />
            <Link id="kayzo-link" to={`/djs/${djs["Kayzo"]}`} title="Kayzo">
              Kayzo - The Fire
            </Link>
            <audio id="fire" src="fire.mp3" controls></audio>
          </article>
        </li>
        <li className="song">
          <article>
            <img src={window.prydzUrl} id="prydz" alt="Eric Prydz" />
            <Link
              id="prydz-link"
              to={`/djs/${djs["Eric Prydz"]}`}
              title="Eric Prydz"
            >
              Eric Prydz - The Matrix
            </Link>
            <audio id="matrix" src="matrix.mp3" controls></audio>
          </article>
        </li>
      </ul>
    </div>
  );
}

export default FixedDjs;