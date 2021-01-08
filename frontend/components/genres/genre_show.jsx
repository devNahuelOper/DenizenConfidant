import React from "react";
import { Link } from "react-router-dom";
import { TitleComponent } from "../title_component.jsx";
import SubnavToggle from "../subnav/subnav";
import NavBar from "../navbar/navbar";
import { toggleSearch } from "../../util/search_util";
import _ from "lodash";

class GenreShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGenre(this.props.match.params.genreId);
    // this.props.fetchDjs();
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    toggleSearch();
  }

  render() {
    if (!this.props.genre) {
      return null;
    }
    const { genre } = this.props;

    // const ids = genre.artist_ids;
    // const length = genre.artists.length / 2;

    const artists = Array.from(new Set(genre.artists));
    const artist_ids = Array.from(
      new Set(genre.artist_ids.map((id) => id.toString()))
    );

    const exampleDjs = _.zip(artists, artist_ids).sort();
    return (
      <React.Fragment>
        <TitleComponent title={`DC: ${genre.name}`} />
        <div className="genre-index" id="genre-show">
          <header>
            <div
              id={`${genre.name.toLowerCase().split("-").join("")}-container`}
              className="genreshow-nav-container"
              style={{ backgroundImage: `url("${genre.photoUrl}")` }}
            >
              <NavBar
                title={genre.name}
                entity="Genre"
                hasLinks={true}
                path="/genres"
                label="Genres"
              />
            </div>
          </header>
          <div className="genre-subnav-container">
            <section className="genre-subnav">
              <ul>
                <li>
                  <Link to="/genres">All</Link>
                </li>
                <li>
                  <Link className="form" to={`/genres/${genre.id}`}>
                    {genre.name}
                  </Link>
                </li>
                <li>
                  <Link to="/">Take me back home</Link>
                </li>
              </ul>
            </section>
            <SubnavToggle
              title={genre.name}
              labels={["All", "Take me back home"]}
              paths={["/genres", "/"]}
            />
          </div>

          <div className="genre-main">
            <section className="description-container">
              <h1>Overview</h1>
              <hr />
              <div id="genre-bio">
                <ul>
                  {genre.description.split("  ").map((par, i) => (
                    <li key={i}>
                      {par}
                      <br />
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <section className="examples">
              <h1>{genre.name} DJs</h1>
              <hr />
              <ul className="example-list">
                {/* {genre.artists
                  .slice(0, length)
                  .sort()
                  .map((artist) => (
                    <li
                      className={
                        artist.length >= 20 ? "long-link" : "normal-link"
                      }
                      id="dj-link"
                      key={artist}
                    >
                      <Link to={`/djs/${ids[genre.artists.indexOf(artist)]}`}>
                        {artist}
                      </Link>
                    </li>
                  ))} */}
                {exampleDjs.map((ex) => (
                  <li
                    className={ex[0].length >= 20 ? "long-link" : "normal-link"}
                    id="dj-link"
                    key={ex[1]}
                  >
                    <Link to={`/djs/${ex[1]}`}>{ex[0]}</Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GenreShow;
