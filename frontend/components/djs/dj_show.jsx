import React from "react";
import { Link } from "react-router-dom";
import { TitleComponent } from "../title_component.jsx";
import SubnavToggle from "../subnav/subnav";
import NavBar from "../navbar/navbar";
import { toggleSearch } from "../../util/search_util";

class DjShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDj(this.props.match.params.djId);
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    toggleSearch();
  }

  render() {
    const { dj } = this.props;
    if (!dj) return null;

    const genres = dj.get_genres ? Object.entries(dj.get_genres) : null;

    const noAttach = {
      backgroundImage: `url("${`https://denizen-confidant-seeds.s3.amazonaws.com/${dj.name
        .toLowerCase()
        .replace(/\s/g, "")}.png`}")`,
    };
    const yesAttach = {
      backgroundImage: `url("${dj.photoUrl}")`,
    };

    const extractSongTitle = (url) => {
      let song = url
        .slice(url.lastIndexOf("/") + 1, url.lastIndexOf("."))
        .replace("+", " ");
      return song.replace(/\W\d*/g, " ");
    };

    return (
      <React.Fragment>
        <TitleComponent title={`DC: ${dj.name}`} />
        <div className="djs-index" id="dj-show">
          <header>
            <div
              id={`${dj.name.toLowerCase().split(" ").join("")}-container`}
              className="djshow-nav-container"
              style={!dj.photoUrl ? noAttach : yesAttach}
            >
              <NavBar
                title={dj.name}
                entity="Dj"
                hasLinks={true}
                path="/djs"
                label="DJs"
              />
            </div>
          </header>
          <div className="djs-subnav-container">
            <section className="djs-subnav">
              <ul>
                <li>
                  <Link to="/djs">All</Link>
                </li>
                <li>
                  <Link className="form" to={`/djs/${dj.id}`}>
                    {dj.name}
                  </Link>
                </li>
                <li id="pending">
                  <Link to="/djs/new">Create an artist profile</Link>
                </li>
              </ul>
            </section>
            <SubnavToggle
              title={dj.name}
              labels={["All", "Create an artist profile"]}
              paths={["/djs", "/djs/new"]}
            />
          </div>
          <div className="djsubheader-container">
            <section className="djshow-subheader">
              <ul className="details">
                <li>
                  <small>Country /</small>
                  <br />
                  {dj.nationality.split(" ").reverse().join(" ")}
                </li>
                <li>
                  <small>Genre(s) /</small> <br />
                  {genres.map((gen, i) => (
                    <Link
                      id="genre-link"
                      key={`${gen}${i}`}
                      to={`/genres/${gen[1]}`}
                    >
                      {gen[0]}
                    </Link>
                  ))}
                </li>
              </ul>
            </section>
          </div>
          <div className="dj-main">
            <section className="bio-container">
              <h1>Biography</h1>
              <hr />
              <p id="bio">{dj.bio ? dj.bio : null}</p>
              {/* <img id="dj-image" src={`https://denizen-confidant-seeds.s3.amazonaws.com/${dj.name.toLowerCase().split(' ').join('')}.png`} /> */}
            </section>
            <section className="playlist">
              <h1>Tracks by {dj.name}</h1>
              <hr />
              <ul className="songs">
                {dj.songsUrl &&
                  dj.songsUrl.map((song) => (
                    <li className="dj-song" key={dj.songsUrl.indexOf(song)}>
                      <span
                        className="song-title"
                        id={extractSongTitle(song).replace(/\s/g, "")}
                      >
                        {extractSongTitle(song)}
                      </span>
                      <hr />
                      <audio src={song} controls></audio>
                    </li>
                  ))}
                {dj.trackUrl && (
                  <li className="dj-song">
                    <span
                      className="song-title"
                      id={extractSongTitle(song).replace(/\s/g, "")}
                    >
                      {extractSongTitle(song)}
                    </span>
                    <hr />
                    <audio src={dj.trackUrl} controls></audio>
                  </li>
                )}
              </ul>
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DjShow;
