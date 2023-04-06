import React from "react";
import { Link } from "react-router-dom";
import { TitleComponent } from "../../title_component.jsx";
import SubnavToggle from "../../subnav/subnav";
import NavBar from "../../navbar/navbar";
import { expandCountry } from "../../../util/location_util";
import { handleImageSize } from "../../../util/form_util";
import { extractSongTitle, formatNewSongs } from "../../../util/url_util";
import DjImagePreview from "../dj_image_preview";

class UpdateDjForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.dj,
      songFiles: [],
      errors: this.props.errors,
    };
    this.updateGenre = this.updateGenre.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.addSongs = this.addSongs.bind(this);
    this.removeSong = this.removeSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formatNationality = this.formatNationality.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.dj);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchDj(this.props.match.params.djId);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value }, () => {
        if (field === "nationality" && this.state.city) {
          this.setState({ city: "" });
        }
      });
      // console.log(this.state);
    };
  }

  updateGenre(key) {
    let genreState = { ...this.state.genre.split(" ") };
    return (e) => {
      let newGenreState = { ...genreState, [key]: e.currentTarget.value };
      newGenreState = Object.values(newGenreState).join(" ");
      this.setState({ genre: newGenreState });
      // console.log(this.state);
    };
  }

  handlePhoto(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    const url = URL.createObjectURL(file);

    fileReader.onloadend = () => {
      let image = new Image();
      image.src = url;
      this.setState({ photoFile: file, photoUrl: url });
      image.onload = () => handleImageSize(image, file);
    };

    if (file) {
      fileReader.readAsDataURL(file);
      e.currentTarget.classList.add("file-added");
    }
  }

  addSongs(e) {
    e.preventDefault();
    const files = Array.from(e.currentTarget.files).filter(
      (file) =>
        !this.state.songFiles.some((songFile) => songFile.name == file.name) &&
        !this.state.songNames.includes(file.name)
    );
    const songs = this.state.songsUrl || [];
    let initLength = this.state.songsUrl.length;

    for (let file of files) {
      const fileReader = new FileReader();
      const urls = files.map((file) => URL.createObjectURL(file));

      fileReader.onloadend = () => {
        const songState = [...songs, ...urls];
        const songFileState = [...this.state.songFiles, file];
        this.setState({
          songsUrl: songState,
          songFiles: _.uniqBy(songFileState, (file) => file.name),
        });

        formatNewSongs(this.state.songFiles, initLength);
      };

      if (file) fileReader.readAsDataURL(file);
    }
  }

  removeSong(song, idx) {
    const { songsUrl, songFiles } = this.state;
    const newSongsUrl = songsUrl.filter((url) => url != song);
    const newSongFiles = songFiles.filter((file) => file != songFiles[idx]);
    this.setState({
      songsUrl: newSongsUrl,
      songFiles: newSongFiles,
    });
  }

  formatNationality() {
    const { city, nationality } = this.state ?? {};
    let natStr = nationality;
    if (city || /,/.test(nationality)) {
      natStr = `${city || nationality.split(",")[0]}, ${nationality.replace(
        /([\w\s]*,)+ /,
        ""
      )}`;
    }
    return natStr;
  }

  handleSubmit(e) {
    const { name, genre, bio, nationality, city, photoFile, songFiles } =
      this.state ?? {};
    e.preventDefault();
    const formData = new FormData();
    formData.append("dj[name]", name);
    formData.append("dj[nationality]", this.formatNationality());
    formData.append("dj[genre]", genre);
    formData.append("dj[bio]", bio);
    if (photoFile) {
      formData.append("dj[photo]", photoFile);
    }
    if (songFiles) {
      for (let i = 0; i < songFiles.length; i++) {
        formData.append("dj[songs][]", songFiles[i]);
      }
    }
    $(".loader").show();

    const { dj, updateDj, history } = this.props;
    updateDj(formData, dj.id).then((dj) => history.push(`/djs/${dj.dj.id}`));
  }

  render() {
    const { dj, currentUser, genres } = this.props;
    if (!dj) return null;

    const genreSets = [[...genres], [...genres], [...genres]];

    const { name, nationality, genre, bio, photoUrl, songNames } = this.state;

    const emojiRegex = /\p{RI}\p{RI}|\p{Emoji}/gu;

    const countries = Object.entries(expandCountry).map(
      (k) => `${k[0]}  ${k[1].flag}`
    );

    const matchedCountry =
      expandCountry[
        nationality.replace(/([\w\s]+,)* /, "").replace(/\W/g, "")
      ] ||
      expandCountry[nationality.split("/")[0]] ||
      expandCountry[nationality.replace(emojiRegex, "").trim()];

    const { cities: currentCities = [] } = matchedCountry || {};

    const preview = photoUrl ? (
      <DjImagePreview
        name={name}
        nationality={nationality}
        photoUrl={photoUrl}
        genre={genre}
      />
    ) : null;

    const songs = this.state.songsUrl || [];

    return (
      <React.Fragment>
        <TitleComponent title={`DC: Update ${dj.name}`} />
        <div className="user-profile" id="update-dj">
          <header>
            <div id="nav-container">
              <NavBar
                title="DJ Management"
                entity="Dj"
                hasLinks={true}
                path={[`/users/${currentUser.id}/djs`, "#"]}
                label={["My DJs", `${dj.name}`]}
                type="form"
              />
            </div>
          </header>
          <div className="subnav-container">
            <section id="subnav">
              <ul>
                <li>
                  <Link to={`/users/${currentUser.id}/djs`}>My DJs</Link>
                </li>
                <li className="form">
                  <Link to="#">Core Details</Link>
                </li>
              </ul>
            </section>
            <SubnavToggle
              currentUser={currentUser}
              title="Core Details"
              labels={["My DJs"]}
              paths={[`/users/${currentUser.id}/djs`]}
            />
          </div>
          <div className="dj-form-container">
            <div className="form-wrap">
              <form className="update-dj-form" onSubmit={this.handleSubmit}>
                <label htmlFor="name">
                  DJ Name / <br />
                  <input
                    type="text"
                    className="update-input"
                    name="name"
                    value={name}
                    onChange={this.update("name")}
                  />
                </label>
                <br />
                <label htmlFor="nationality">
                  Country & area / <small>your home country</small> <br />
                  <article className="location-hold">
                    <select
                      name="nationality"
                      id="countries"
                      className="nationality-select"
                      defaultValue={countries.find((c) =>
                        nationality
                          .split("/")[0]
                          .includes(c.replace(emojiRegex, "").trim())
                      )}
                      onChange={this.update("nationality")}
                    >
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    <br />
                    <select
                      name="nationality"
                      id="cities"
                      className="nationality-select"
                      value={
                        this.state.city ||
                        currentCities.find((c) => nationality.includes(c)) ||
                        "--Select a City--"
                      }
                      onChange={this.update("city")}
                    >
                      <option value="--Select a City--" disabled={true}>
                        --Select a City--
                      </option>
                      {currentCities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </article>
                </label>
                <br />
                <label htmlFor="genre">
                  Musical Style(s) / <br />
                  <article className="genre-hold">
                    {genreSets.map((genSet, i) => (
                      <select
                        key={`genre-set${i}`}
                        name="genre"
                        id="genre-select"
                        value={genre.split(" ")[i] || "--Select a Style--"}
                        onChange={this.updateGenre(i)}
                      >
                        {genSet.map((gen) => (
                          <option key={gen} value={gen}>
                            {gen}
                          </option>
                        ))}
                      </select>
                    ))}
                  </article>
                </label>
                <br />
                <label htmlFor="bio">
                  Biography /{" "}
                  <small>nothing is too big or too small to share</small> <br />
                  <textarea
                    name="bio"
                    id="bio-input"
                    spellCheck={false}
                    value={bio}
                    onChange={this.update("bio")}
                  ></textarea>
                </label>
                <br />
                <label htmlFor="photoUrl">
                  Primary DJ Photo / <br />
                  <input
                    type="file"
                    name="photoUrl"
                    className="file-input"
                    accept=".jpg,.jpeg,.png,.gif"
                    onChange={this.handlePhoto}
                  />
                </label>
                <br />
                {preview}
                <br />
                <label htmlFor="songs">
                  Selected Discography / <br />
                  <input
                    type="file"
                    name="songs"
                    className="file-input"
                    accept=".mp3,.mpeg,.mpeg3,.audio/*"
                    multiple
                    onChange={this.addSongs}
                  />
                  <ul className="dj-update-songs">
                    {Boolean(songs.length) &&
                      songs.map((song, i) => (
                        <li key={i} className="update-song">
                          <span className="songTitle">
                            {extractSongTitle(song)}
                          </span>
                          <audio src={song} controls></audio>
                          <span
                            className="remove-song"
                            title="Remove Song"
                            onClick={() =>
                              this.removeSong(song, i - songNames.length)
                            }
                          >
                            ✖️
                          </span>
                        </li>
                      ))}
                  </ul>
                </label>
                <input className="submit-btn" type="submit" value="Submit" />
              </form>
            </div>
            {!this.props.errors.length && (
              <div className="loader loader-hide"></div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UpdateDjForm;
