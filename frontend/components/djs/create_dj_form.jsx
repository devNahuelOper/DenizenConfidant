import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


class CreateDjForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: {
        gen1: '',
        gen2: '',
        gen3: ''
      },
      nationality: '',
      bio: '',
      photoFile: null,
      photoUrl: null,
      songFile: null,
      songFiles: [],
      songUrl: null,
    }
    this.update = this.update.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSong = this.handleSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUrl = this.handleUrl.bind(this);
    this.success = this.success.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchGenres()
    const search = document.getElementById('search');
    const searchbar = document.getElementsByClassName('search-container')[0];
    search.onclick = function () {
      searchbar.style.display = 'block';
      search.className = 'show-search';
    }
    window.onclick = function (e) {
      let inSearchbar = searchbar.contains(e.target);
      let inSearch = search.contains(e.target);
      if (inSearchbar || inSearch) {
        return;
      }
      searchbar.style.display = 'none';
      search.className = 'hide-search';
    }
  }

  success() {
    // const container = document.getElementsByClassName('dj-form-container')[0];
    const msg = document.getElementById('success-msg');
    msg.style.display = 'block';
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
      console.log(this.state);
    }
  }

  handleChange({ target }) {
    this.setState({
      ...this.state,
      genre: {
        ...this.state.genre,
        [target.name]: target.value
      }
    });
    console.log(this.state);
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
    const file = url.split('/').reverse()[0];
    this.setState({photoFile: file, photoUrl: url});
    // console.log(file);
  }

  handleSong(e) {
    const files = Array.from(e.currentTarget.files);
    const frame = document.getElementById('song-preview-frame');
   
    for (let file of files) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        this.setState({ songFile: file, songUrl: fileReader.result, songFiles: Array.from(files)});
      }
      let songTitle = document.createElement('h2');
      songTitle.id = 'prev-songTitle';
      songTitle.setAttribute('style', 'color: #ffff01;' );
      songTitle.innerHTML = file.name.split('.')[0];
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
    formData.append('dj[name]', this.state.name);
    formData.append('dj[nationality]', this.state.nationality);
    formData.append('dj[genre]', Object.values(this.state.genre).join(' '));
    formData.append('dj[bio]', this.state.bio);
    if (this.state.photoFile) {
      formData.append('dj[photo]', this.state.photoFile);
    }
    if (this.state.songFiles) {
      for (let i = 0; i < this.state.songFiles.length; i++) {
        formData.append('dj[songs][]', this.state.songFiles[i]);
        // console.log(formData.getAll('dj[songs][]'));
      }
    }
    this.props.createDj(formData).then(() =>
      // this.props.history.push(`/${this.state.id}`),
      // alert('DJ profile created! Look for your name on the DJs index page.'),
      e.target.reset()
    )
    this.success();
  }


  render() {
    const { name, genre, nationality, bio } = this.state;
    const { genres } = this.props;

    const selectedGenre = Object.values(this.state.genre).join(' ');

    const preview = this.state.photoUrl ? <article className="dj-disp"><img  src={this.state.photoUrl} /><h1 id="disp-name">{name}</h1><span id="disp-banner"><h2 id="disp-country"><small>Country / </small><br/>{nationality.split('  ').reverse().join(' ')}</h2> <h2 id="disp-genre"><small>Genre(s) / </small><br/>{selectedGenre}</h2></span></article> : null;
    // const songPreview = this.state.songsUrl ? <audio src={this.state.songFile.name} controls></audio> : null;
    return (
      <div className="dj-index" id="create-dj">
        <div className="djs-nav-container">
          <section className="djs-nav">
            <nav>
              <Link to="/"><img src={window.logoUrl} id="logo" /></Link>
              <ul id="links">
                <li><Link to="/djs">DJs</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/genres">Music</Link></li>
                <li><button id="search">Search</button></li>
              </ul>
            </nav>
            <h1>DJs</h1>
          </section>
        </div>
        <div className="djs-subnav-container">
          <section className="djs-subnav">
            <ul>
              <li><Link to="/djs">All</Link></li>
              <li><Link to="/">Take me back home</Link></li>
              <li id="pending"><Link className="form" to='/djs'>Create an artist profile</Link></li>
            </ul>
          </section>
          <SubnavToggle />
        </div>
        <div className="dj-requirements">
          <section id="requirements">
            <h1>So you want to create an artist profile? <br/>
              There are two criteria you have to meet:
            </h1>
            <br/>
            <ul>
              <li>
                <h2>1. You must have performed at a public venue or had your music charted on DC.</h2>
                <p>This does not include your cousin's barmitzvah, or that house warming party where you were in charge of the playlist. <br/>
                  Actually you could be just about anybody and create a profile. This is just here to
                  fill in space for styling purposes. Even a ferret could create an artist profile.
                </p>
              </li>
              <li>
                <h2>2. You must be a registered DC member.</h2>
                <p>This criteria does apply. No ifs ands or buts about it.
                  Don't have a profile? Signup <Link to="/signup">Here</Link>.
                </p>
              </li>
            </ul>
          </section>
        </div>
        <div className="dj-form-container">
          <div className="form-wrap">
            <form className="dj-form" onSubmit={this.handleSubmit}>
            <h1>Create an artist profile.</h1>
            <hr/>
            <p>
              Artist name should be submitted exactly as it is billed on flyers. <br/>
              Please use correct capitalization and double check your spelling.
            </p>

            
              <ul className="new-dj-formlist">
                <li>
                  <label htmlFor="name">Enter your artist name / <br/>
                    <input type="text"
                    className="text-input"
                    value={name}
                    onChange={this.update('name')}/>
                  </label>
                </li>
                <li>
                  <label>Country / <br />
                    <select name="Nationality" id="nationality-select" value={nationality || 'United States  🇺🇸'} onChange={this.update('nationality')}>
                      <option value="--Select a country--" disabled={true}>--Select a country--</option>
                      <option value="Argentina  🇦🇷">Argentina  🇦🇷</option>
                      <option value="Brazil  🇧🇷">Brazil  🇧🇷</option>
                      <option value="Canada  🇨🇦">Canada  🇨🇦</option>
                      <option value="China  🇨🇳">China  🇨🇳</option>
                      <option value="France  🇫🇷">France  🇫🇷</option>
                      <option value="Germany  🇩🇪">Germany  🇩🇪</option>
                      <option value="Italy  🇮🇹">Italy  🇮🇹</option>
                      <option value="Japan  🇯🇵">Japan  🇯🇵</option>
                      <option value="Netherlands  🇳🇱">Netherlands  🇳🇱</option>
                      <option value="Spain  🇪🇸">Spain  🇪🇸</option>
                      <option value="Sweden  🇸🇪">Sweden  🇸🇪</option>
                      <option value="United Kingdom  🇬🇧">United Kingdom  🇬🇧</option>
                      <option value="United States  🇺🇸">United States  🇺🇸</option>
                    </select>
                  </label>
                </li>
                <li>
                  <label htmlFor="Genre">Musical Style(s) / <br/>
                    <select name="gen1" id="genre-select" value={genre.gen1 || '--Select a style--'} onChange={this.handleChange}>
                      <option value="--Select a style--" disabled={true}>--Select a style--</option>
                      {genres.map(genre => 
                        <option key={genre.id} >{genre.name}</option>
                          )}
                    </select>
                    <br/>
                    <select name="gen2" id="genre-select" value={genre.gen2 || '--Select a style--'} onChange={this.handleChange}>
                      <option value="--Select a style--" disabled={true}>--Select a style--</option>
                      {genres.map(genre =>
                        <option key={genre.id} > {genre.name}</option>
                      )}
                    </select>
                    <br/>
                    <select name="gen3" id="genre-select" value={genre.gen3 || '--Select a style--'} onChange={this.handleChange}>
                      <option value="--Select a style--" disabled={true}>--Select a style--</option>
                      {genres.map(genre =>
                        <option key={genre.id} > {genre.name}</option>
                      )}
                    </select>
                  </label>
                </li>
                <li>
                  <label htmlFor="bio">Biography / <br />
                    <textarea name="bio"
                      id="bio-input"
                      value={bio}
                      placeholder={`Tell us a bit about who the real ${name || '____'} is`}
                      onChange={this.update('bio')}>
                    </textarea>
                  </label>
                </li>
                <li>
                  <div id="dj-preview-frame">
                    {preview}
                      
                     <br />
                  <div className="dj-input-hold">
                  <label htmlFor="photo">Primary DJ Photo / <br/>
                      <input type="file"
                      className="file-input"
                      accept=".jpg,.jpeg,.png,.gif"
                      onChange={this.handleFile.bind(this)}
                      />
                  </label>
                  <label htmlFor="photo">or enter an external image URL... <br/>
                      <input type="text"
                        className="text-input"
                        onChange={this.handleUrl.bind(this)}/>
                  </label>
                  </div>
                  </div>
                </li>
               
                <li>
                  <div id="song-preview-frame">
                  <label htmlFor="song">Upload some music / <br/>
                    <input type="file"
                      className="file-input"
                      accept=".mp3,.mpeg,.mpeg3,.audio/*"
                    multiple  onChange={this.handleSong.bind(this)}/>
                  </label>
                  <small>
                    Attach as many as you like. <br/>
                    Hold <strong>shift</strong> to select a list of files <br/>
                    or <strong>cmd / alt</strong> for a scattered list.
                  </small>
                  <br/>
                  </div>
                </li>
                <br/>
                <li>
                  <input id="submit-dj" type="submit" value="Create"/> 
                  {/* <br/>
                  <span id="submit-dj">Create</span> */}
                  <br/>
                  {/* <p><i>Under Construction</i></p> */}
                </li>
              </ul>
            </form>
            <aside id="success-msg">
              DJ profile created! Look for your name  <Link id="success-link" to="/djs">Here</Link>
            </aside>
          </div>
        </div>
      </div>
    )
  }
};

class SubnavToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drop: false
    }
    this.clicker = this.clicker.bind(this);
    this.leave = this.leave.bind(this);
  }

  clicker(e) {
    this.setState({ "drop": true });
  }

  leave(e) {
    this.setState({ "drop": false });
  }

  render() {
    return (
      <div className="subnav-toggle" id={this.state.drop ? "expand" : "normal"}>
        <button className="subnav-drop" onFocus={this.clicker} onTap={this.clicker} onBlur={this.leave}> <span>Create an artist profile <small>⬇︎</small></span>
          <ul className={this.state.drop ? "reveal" : "hide"}>
            <li><Link className="log-link" onClick={this.leave} to="/djs">All</Link></li>
            <li><Link className="log-link" onClick={this.leave} to="/">Take me back home</Link></li>
          </ul>
        </button>
      </div>
    )
  }
}


export default withRouter(CreateDjForm);