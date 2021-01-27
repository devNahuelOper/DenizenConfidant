import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import SubnavToggle from "../subnav/subnav";
import NavBar from "../navbar/navbar";
import { toggleSearch } from "../../util/search_util";
import { dataURLtoFile } from "../../util/url_util";

class CreateDjForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: {
        gen1: "",
        gen2: "",
        gen3: "",
      },
      nationality: "",
      bio: "",
      user_id: this.props.currentUser.id,
      photoFile: null,
      photoUrl: null,
      songFile: null,
      songFiles: [],
      songUrl: null,
      errors: this.props.errors,
    };
    this.update = this.update.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSong = this.handleSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUrl = this.handleUrl.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchGenres();
    this.props.receiveDjErrors([]);
    toggleSearch();
  }

  clearForm() {
    this.setState({
      name: "",
      nationality: "",
      genre: "",
      bio: "",
      photoFile: null,
      photoUrl: null,
    });
    $("#success-msg").toggleClass("show hidden");
    $("#song-hold").toggleClass("show hidden");
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
      this.props.receiveDjErrors([]);
      console.log(this.state);
    };
  }

  handleGenre({ target }) {
    this.setState({
      ...this.state,
      genre: {
        ...this.state.genre,
        [target.name]: target.value,
      },
    });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleUrl(e) {
    const url = e.currentTarget.value;
    let type = dataURLtoFile(url).type.split("/")[1];
    // let filename = url.split('/').reverse()[0];
    let filename = this.state.name || "image";
    const file = dataURLtoFile(url, `${filename}.${type}`);
    // const file = new File([""], url);
    this.setState({ photoFile: file, photoUrl: url });
  }

  handleSong(e) {
    const files = Array.from(e.currentTarget.files);
    const frame = document.getElementById("song-hold");

    for (let file of files) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        this.setState({
          songFile: file,
          songUrl: fileReader.result,
          songFiles: Array.from(files),
        });
      };
      let songTitle = document.createElement("h2");
      songTitle.id = "prev-songTitle";
      songTitle.innerHTML = file.name.split(".")[0];
      let audio = new Audio();
      audio.src = file.name;
      audio.controls = true;
      frame.appendChild(songTitle);
      frame.appendChild(audio);
      if (file) {
        fileReader.readAsDataURL(file);
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("dj[name]", this.state.name);
    formData.append("dj[nationality]", this.state.nationality);
    formData.append("dj[genre]", Object.values(this.state.genre).join(" "));
    formData.append("dj[bio]", this.state.bio);
    formData.append("dj[user_id]", this.state.user_id);
    if (this.state.photoFile) {
      formData.append("dj[photo]", this.state.photoFile);
    }
    if (this.state.songFiles) {
      for (let i = 0; i < this.state.songFiles.length; i++) {
        formData.append("dj[songs][]", this.state.songFiles[i]);
        // console.log(formData.getAll('dj[songs][]'));
      }
    }
    this.props
      .createDj(formData)
      .then((dj) => this.props.history.push(`/djs/${dj.dj.id}`));
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {`- ${error.split(" ").slice(1).join(" ")}`}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { name, genre, nationality, bio } = this.state;
    const { genres } = this.props;

    const selectedGenre = Object.values(this.state.genre).join(" ");

    const preview = this.state.photoUrl ? (
      <article className="dj-disp">
        <img src={this.state.photoUrl} />
        <h1 id="disp-name">{name}</h1>
        <span id="disp-banner">
          <h2 id="disp-country">
            <small>Country / </small>
            <br />
            {nationality.split("  ").reverse().join(" ")}
          </h2>{" "}
          <h2 id="disp-genre">
            <small>Genre(s) / </small>
            <br />
            {selectedGenre}
          </h2>
        </span>
      </article>
    ) : null;
    // const songPreview = this.state.songsUrl ? <audio src={this.state.songFile.name} controls></audio> : null;
    return (
      <div className="dj-index" id="create-dj">
        <div className="djs-nav-container">
          <NavBar title="DJs" entity="Dj" />
        </div>
        <div className="djs-subnav-container">
          <section className="djs-subnav">
            <ul>
              <li>
                <Link to="/djs">All</Link>
              </li>
              <li id="pending">
                <Link className="form" to="#">
                  Create an artist profile
                </Link>
              </li>
              <li>
                <Link to="/">Take me back home</Link>
              </li>
            </ul>
          </section>
          <SubnavToggle
            title="Create an artist profile"
            labels={["All", "Take me back home"]}
            paths={["/djs", "/"]}
          />
        </div>
        <div className="dj-requirements">
          <section id="requirements">
            <h1>
              So you want to create an artist profile? <br />
              There are two criteria you have to meet:
            </h1>
            <br />
            <ul>
              <li>
                <h2>
                  1. You must have performed at a public venue or had your music
                  charted on DC.
                </h2>
                <p>
                  This does not include your cousin's barmitzvah, or that house
                  warming party where you were in charge of the playlist. <br />
                  Actually you could be just about anybody and create a profile.
                  This is just here to fill in space for styling purposes. Even
                  a ferret could create an artist profile.
                </p>
              </li>
              <li>
                <h2>2. You must be a registered DC member.</h2>
                <p>
                  This criteria does apply. No ifs ands or buts about it. Don't
                  have a profile? Signup <Link to="/signup">Here</Link>.
                </p>
              </li>
            </ul>
          </section>
        </div>
        <div className="dj-form-container">
          <div className="form-wrap">
            <form className="dj-form" onSubmit={this.handleSubmit}>
              <h1>Create an artist profile.</h1>
              <hr />
              <p>
                Artist name should be submitted exactly as it is billed on
                flyers. <br />
                Please use correct capitalization and double check your
                spelling.
              </p>

              <ul className="new-dj-formlist">
                <li>
                  <label htmlFor="name">
                    Enter your artist name / <br />
                    <input
                      type="text"
                      className="text-input"
                      value={name}
                      onChange={this.update("name")}
                    />
                  </label>
                </li>
                <li>
                  <label>
                    Country / <br />
                    <select
                      name="Nationality"
                      id="nationality-select"
                      value={nationality || "--Select a country--"}
                      onChange={this.update("nationality")}
                    >
                      <option value="--Select a country--" disabled={true}>
                        --Select a country--
                      </option>
                      <option value="Argentina  🇦🇷">Argentina 🇦🇷</option>
                      <option value="Brazil  🇧🇷">Brazil 🇧🇷</option>
                      <option value="Canada  🇨🇦">Canada 🇨🇦</option>
                      <option value="China  🇨🇳">China 🇨🇳</option>
                      <option value="France  🇫🇷">France 🇫🇷</option>
                      <option value="Germany  🇩🇪">Germany 🇩🇪</option>
                      <option value="Italy  🇮🇹">Italy 🇮🇹</option>
                      <option value="Japan  🇯🇵">Japan 🇯🇵</option>
                      <option value="Netherlands  🇳🇱">Netherlands 🇳🇱</option>
                      <option value="Spain  🇪🇸">Spain 🇪🇸</option>
                      <option value="Sweden  🇸🇪">Sweden 🇸🇪</option>
                      <option value="UK  🇬🇧">UK 🇬🇧</option>
                      <option value="USA  🇺🇸">USA 🇺🇸</option>
                    </select>
                  </label>
                </li>
                <li>
                  <label htmlFor="Genre">
                    Musical Style(s) / <br />
                    <select
                      name="gen1"
                      id="genre-select"
                      value={genre.gen1 || "--Select a style--"}
                      onChange={this.handleGenre}
                    >
                      <option value="--Select a style--" disabled={true}>
                        --Select a style--
                      </option>
                      {genres.map((genre) => (
                        <option key={genre.id}>{genre.name}</option>
                      ))}
                    </select>
                    <br />
                    <select
                      name="gen2"
                      id="genre-select"
                      value={genre.gen2 || "--Select a style--"}
                      onChange={this.handleGenre}
                    >
                      <option value="--Select a style--" disabled={true}>
                        --Select a style--
                      </option>
                      {genres.map((genre) => (
                        <option key={genre.id}> {genre.name}</option>
                      ))}
                    </select>
                    <br />
                    <select
                      name="gen3"
                      id="genre-select"
                      value={genre.gen3 || "--Select a style--"}
                      onChange={this.handleGenre}
                    >
                      <option value="--Select a style--" disabled={true}>
                        --Select a style--
                      </option>
                      {genres.map((genre) => (
                        <option key={genre.id}> {genre.name}</option>
                      ))}
                    </select>
                  </label>
                </li>
                <li>
                  <label htmlFor="bio">
                    Biography / <br />
                    <textarea
                      name="bio"
                      id="bio-input"
                      value={bio}
                      placeholder={`Tell us a bit about who the real ${
                        name || "____"
                      } is`}
                      onChange={this.update("bio")}
                    ></textarea>
                  </label>
                </li>
                <li>
                  <div id="dj-preview-frame">
                    {preview}

                    <br />
                    <div className="dj-input-hold">
                      <label htmlFor="photo">
                        Primary DJ Photo / <br />
                        <input
                          type="file"
                          className="file-input"
                          accept=".jpg,.jpeg,.png,.gif"
                          onChange={this.handleFile.bind(this)}
                        />
                      </label>
                      <section>
                        <label id="external" htmlFor="photo">
                          or enter an external image URL... <br />
                          <input
                            type="text"
                            className="text-input"
                            onChange={this.handleUrl.bind(this)}
                          />
                        </label>
                        <br />
                        <small>
                          Right-click on your image, then select{" "}
                          <strong>Copy Image Address</strong>. <br />
                          URL should start with something like{" "}
                          <strong>'data:image/jpeg;base64...'</strong>
                        </small>
                      </section>
                    </div>
                  </div>
                </li>
                <li>
                  <div id="song-preview-frame">
                    <label htmlFor="song">
                      Upload some music / <br />
                      <input
                        type="file"
                        className="file-input"
                        accept=".mp3,.mpeg,.mpeg3,.audio/*"
                        multiple
                        onChange={this.handleSong.bind(this)}
                      />
                    </label>
                    <small>
                      Hold <strong>shift</strong> to select a list of files or
                      <br />
                      <strong>
                        cmd<i>(mac) /</i> alt<i>(pc)</i>
                      </strong>{" "}
                      for a scattered list.
                    </small>
                    <div id="song-hold"></div>
                    <br />
                  </div>
                </li>
                <br />
                <li>
                  <input id="submit-dj" type="submit" value="Create" />
                  <br />
                  {/* <p><i>Under Construction</i></p> */}
                </li>
              </ul>
            </form>
            {this.props.errors.length > 0 && (
              <aside className="dj-errors">
                Notifications /{this.renderErrors()}
              </aside>
            )}
            <aside id="success-msg" className="hidden">
              DJ profile created! Look for your name{" "}
              <Link id="success-link" to="/djs">
                Here
              </Link>
            </aside>

            {/* <span onClick={this.clearForm}>Reset</span> */}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateDjForm);
