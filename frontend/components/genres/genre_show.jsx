import React from "react";
import { Link } from "react-router-dom";
import { TitleComponent } from "../title_component.jsx";
import SubnavToggle from "../subnav/subnav";
import NavBar from "../navbar/navbar";
import _ from "lodash";

class GenreShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGenre(this.props.match.params.genreId);
    window.scrollTo(0, 0);
  }

  render() {
    if (!this.props.genre) {
      return null;
    }
    const { genre } = this.props;

    const artists = _.uniqBy(genre.artists, name => name.replace(/\W/));
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
