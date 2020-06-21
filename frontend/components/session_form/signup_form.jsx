import React from 'react';
import { Link } from 'react-router-dom';
import RegionDropdown from './region_dropdown';
import LanguageDropdown from './language_dropdown';
import BirthdayDropdown from './birthday_dropdown';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      fname: '',
      lname: '',
      email: '',
      email_confirmation: '',
      region: null,
      language: null,
      birthday: {
        day: 1,
        month: 'Jan',
        year: '----'
      },
      gender: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checker = this.checker.bind(this);
  }

  componentDidMount() {
    this.props.receiveErrors([]);
  }

  checker(e) {
    e.stopPropagation();
    this.setState({ gender: e.target.value });
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({
      [field]: e.currentTarget.value
    });}

  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="error">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { errors } = this.props;
    const errorStyle = {
      outline: '2px solid #e10',
      border: '1px solid rgb(46, 46, 46)'
    };
    return (
      <div>
       
        <div id="nav-container">
          <nav id="navbar">
            <ul id="links">
              <li>DJs</li>
              <li><Link to="/events">Events</Link></li>
              <li>Music</li>
              <li>Search</li>
            </ul>
          </nav>

          <h1>Your account</h1>

          <section id="subnav">
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li className="form"><Link to="/signup">Register</Link></li>
              <li><Link to="/">Take me back home</Link></li>
            </ul>
          </section>

        </div>
    <div className="signup-form-container">

          {/* {this.renderErrors()} */}
  <form>

    <ul className="signup-form">
       <li>  
          <div>Username /
            <br/>
            <input
                style={errors.length ? errorStyle : { border: '1px solid rgb(46, 46, 46)'}}
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-input" />
                <p className="errors">{this.props.errors[0]}</p>
          </div> 
              <br />

          <div>Password /
            <br/>
              <input
                style={errors.length ? errorStyle : { border: '1px solid rgb(46, 46, 46)' }} 
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
              />
                <p className="errors">{this.props.errors[1]}</p>
          </div>
        </li> 
              <span id="no-space">No spaces, 18 char max.</span>
              

            <li>
              <div>Email address /
                <br/>
                <input
                    style={errors.length ? errorStyle : { border: '1px solid rgb(46, 46, 46)' }}
                    type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="email-input" />
                  <p className="errors">{this.props.errors[4]}</p>
              </div>

                <br />

              <div>Confirm email /
                <br/>
                <input
                    style={errors.length ? errorStyle : { border: '1px solid rgb(46, 46, 46)' }} 
                    type="text"
                    value={this.state.email_confirmation}
                    onChange={this.update('email_confirmation')}
                    className="email-input"/>
                  <p className="errors">{this.props.errors[5]}</p>
              </div>
              </li>

           

          <li>
            <div>First Name /
              <br/>  
              <input
                    style={errors.length ? errorStyle : { border: '1px solid rgb(46, 46, 46)' }}
                  type="text"
                  value={this.state.fname}
                  onChange={this.update('fname')}
                  className="signup-input" />
                <p className="errors">{this.props.errors[2]}</p>
            </div>
              <br/>
            <div>Surname /
              <br/>
              <input
                    style={errors.length ? errorStyle : { border: '1px solid rgb(46, 46, 46)' }}
                  type="text"
                  value={this.state.lname}
                  onChange={this.update('lname')}
                  className="signup-input" />
                <p className="errors">{this.props.errors[3]}</p>
            </div>
          </li>

              <li><RegionDropdown 
                    region={this.state.region}
                    onChange={(region) => this.setState({region: region})}/>
              </li>
        

              <span id="default-region-msg">This selection is your default for viewing events, clubs and other local content.</span>

              <li>
          <div><LanguageDropdown 
                  language={this.state.language}
                  onChange={(language) => this.setState({ language: language })} /></div>

         <div><BirthdayDropdown 
                  birthday={this.state.birthday}
                  handleChange={(field, input) => {
                    const newBirthday = this.state.birthday;
                    newBirthday[field] = input;
                    this.setState({birthday: newBirthday});
                  }
                  } /></div>
              </li>

            
                <p className="errors">{this.props.errors[6]}</p>
              <li>
                <div id="gender">Gender /
                <br/>
                  <input style={errors.length ? errorStyle : { border: '1px solid rgb(46, 46, 46)' }} type="radio" id="Male" value={"Male"} checked={this.state.gender === "Male"} onChange={this.checker}/>Male
                  <br/>
                  <input style={errors.length ? errorStyle : { border: '1px solid rgb(46, 46, 46)' }} type="radio" id="Female" value={"Female"} checked={this.state.gender === "Female"} onChange={this.checker}/>Female
                  <br/>
                  <input style={errors.length ? errorStyle : { border: '1px solid rgb(46, 46, 46)' }} type="radio" id="Other" value={"Other"} checked={this.state.gender === "Other"} onChange={this.checker}/>Other
                </div>
              </li>

              <li>
                <div id="newsletter">DC Newsletter /
                <br/>
                  <span>
                    <input id="check-box" type="checkbox"/>
                    Subscribe to the weekly DC Newsletter which doesn't exist, and is only here to fill space for styling.
                    <br/>
                    By checking this box, you aknowledge that you are checking a box.
                  </span>

                </div>
              </li>
                <li><button onClick={this.handleSubmit} className="signup-button">Submit</button></li>
              {/* <li><input className="signup-button" type="submit" value='Submit' /></li> */}
            </ul>
          </form>

          <div className="demo-login">
             <span id="demo-notice">See a demo login of a Denizen Confidant user by clicking below.</span>
             <button id="demo-button" onClick={this.props.demoUser}>Login with </button>
          </div>

        </div>
      </div>
    )
  }
}

export default SignupForm;