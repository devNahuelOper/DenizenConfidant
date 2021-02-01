import React from "react";
import { Link } from "react-router-dom";
import { TitleComponent } from "../../title_component.jsx";
import SubnavToggle from "../../subnav/subnav";
import NavBar from "../../navbar/navbar";
import { expandCountry } from "../../../util/location_util";
import { handleImageSize } from "../../../util/form_util";
import DjImagePreview from "../dj_image_preview";

class UpdateDjForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.dj;
    this.updateGenre = this.updateGenre.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.dj);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchDj(this.props.match.params.djId);
    // console.log('Mounted', this.props);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
      console.log(this.state);
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

  handleFile(e) {
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

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("dj[name]", this.state.name);
    formData.append("dj[nationality]", this.state.nationality);
    formData.append("dj[genre]", this.state.genre);
    formData.append("dj[bio]", this.state.bio);
    if (this.state.photoFile) {
      formData.append("dj[photo]", this.state.photoFile);
    }
  }

  render() {
    const { dj, currentUser, genres } = this.props;
    if (!dj) return null;

    const genreSets = [[...genres], [...genres], [...genres]];

    const { name, nationality, genre, bio, photoUrl } = this.state;

    const countries = Object.entries(expandCountry).map(
      (k) => `${k[0]}  ${k[1].flag}`
    );
    const currentCities = expandCountry[nationality.replace(/\W/g, "")].cities;

    const preview = photoUrl ? (
      <DjImagePreview
        name={name}
        nationality={nationality}
        photoUrl={photoUrl}
        genre={genre}
      />
    ) : null;

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
              <form className="update-dj-form">
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
                      value={nationality}
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
                      value={this.state.city || " --Select a city-- "}
                      onChange={this.update("city")}
                    >
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
                    onChange={this.handleFile}
                  />
                </label>
                <br />
                {preview}
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UpdateDjForm;
