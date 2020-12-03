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
    this.props.fetchGenres();
    // this.props.fetchGenres().then(genres => this.setState({genres: Object.values(genres.genres)}));
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    toggleSearch();
  }

  render() {
    if (!this.props.dj) {
      return null;
    }
    const { dj } = this.props;
    const noAttach = {
      backgroundImage: `url("${`https://denizen-confidant-seeds.s3.amazonaws.com/${dj.name
        .toLowerCase()
        .split(" ")
        .join("")}.png`}")`,
    };
    const yesAttach = {
      backgroundImage: `url("${dj.photoUrl}")`,
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
                {/* <li><Link to="/">Take me back home</Link></li> */}
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
                  {/* {dj.genre} */}
                  {dj.genre
                    .split(" ")
                    .filter(String)
                    .map((gen) => (
                      <Link
                        id="genre-link"
                        key={gen}
                        to={`/genres/${
                          this.props.genres.find((g) => g.name === gen).id
                        }`}
                      >
                        {gen}
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
                {dj.songsUrl
                  ? dj.songsUrl.map((song) => (
                      <li className="dj-song" key={dj.songsUrl.indexOf(song)}>
                        <span id="song-title">
                          {song
                            .slice(
                              song.lastIndexOf("/") + 1,
                              song.lastIndexOf(".")
                            )
                            .split("+")
                            .join(" ")}
                        </span>
                        <hr />
                        <audio src={song} controls></audio>
                      </li>
                    ))
                  : null}
                {dj.trackUrl ? (
                  <li className="dj-song">
                    <span id="song-title">
                      {dj.trackUrl
                        .slice(
                          dj.trackUrl.lastIndexOf("/") + 1,
                          dj.trackUrl.lastIndexOf(".")
                        )
                        .split("+")
                        .join(" ")}
                    </span>
                    <hr />
                    <audio src={dj.trackUrl} controls></audio>
                  </li>
                ) : null}
              </ul>
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DjShow;
