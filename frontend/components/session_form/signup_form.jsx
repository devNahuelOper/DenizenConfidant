import React from 'react';
import { Link } from 'react-router-dom';
import RegionDropdown from './region_dropdown';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      default_region: 'Select a country:'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>

        <div id="nav-container">
          <nav id="navbar">
            <ul id="links">
              <li>DJs</li>
              <li>Events</li>
              <li>Music</li>
              <li>Search</li>
            </ul>
          </nav>

          <h1>Your account</h1>

          <section id="subnav">
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Register</Link></li>
              <li><Link to="/">Take me back home</Link></li>
            </ul>
          </section>

        </div>
    <div className="signup-form-container">

          {this.renderErrors()}
  <form onSubmit={this.handleSubmit} >

    <ul className="signup-form">
       <li>  
          <div>Username/
            <br/>
            <input
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-input" />
          </div> 
         
              <br />

          <div>Password/
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
              />
          </div>
        </li> 
              <span id="no-space">No spaces, 18 char max.</span>
              

            <li>
              <div>Email address/
                <br/>
                <input
                    type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="email-input" />
              </div>

                <br />

              <div>Confirm email/
                <br/>
                <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="email-input"
                  />
              </div>
              </li>

           

          <li>
            <div>First Name/
              <br/>  
              <input
                  type="text"
                  value={this.state.firstName}
                  onChange={this.update('firstName')}
                  className="signup-input" />
            </div>
        
              <br/>
            <div>Surname/
              <br/>
              <input
                  type="text"
                  value={this.state.lastName}
                  onChange={this.update('lastName')}
                  className="signup-input" />
            </div>
          </li>

              <li><RegionDropdown onChange={this.update('default_region')} /></li>
        
          <li>Default region/</li>
            <li><select id="default-region" name="countries" defaultValue="Select a country">
                  <option value="Select a country" disabled>Select a country:</option>
                <option value="argentina">Argentina</option>
                  <option value="australia">Australia</option>
                  <option value="brazil">Brazil</option>
                  <option value="canada">Canada</option>
                  <option value="france">France</option>
                  <option value="germany">Germany</option>
                  <option value="italy">Italy</option>
                  <option value="netherlands">Netherlands</option>
                  <option value="spain">Spain</option>
                  <option value="uk">UK</option>
                  <option value="usa">USA</option>
                  <option value="vatican city">Vatican City</option>
                </select></li>

              <span id="default-region-msg">This selection is your default for viewing events, clubs and other local content.</span>

              <li>
                <div>Preferred language/
                  <br/>
                  <select id="preferred-language" defaultValue="English">
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="Italian">Italian</option>
                    <option value="Portuguese">Portuguese</option>
                    <option value="German">German</option>
                    <option value="Dutch">Dutch</option>
                    <option value="Russian">Russian</option>
                    <option value="Chinese">Chinese(Mandarin)</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Dothraki">Dothraki</option>
                  </select>
                </div>
              </li>

              <li>
                <div id="gender">Gender/
                <br/>
                  <input type="radio" value="Male"/>Male
                  <br/>
                  <input type="radio" value="Female"/>Female
                  <br/>
                  <input type="radio" value="Other"/>Other
                </div>
              </li>

              <li>
                <div id="newsletter">DC Newsletter/
                <br/>
                  <span>
                    <input id="check-box" type="checkbox"/>
                    Subscribe to the weekly DC Newsletter and communications about our services, products and events.
                    <br/>
                    By checking this box, you aknowledge that you are checking a box.
                  </span>

                </div>
              </li>

              <li><input className="signup-button" type="submit" value='Submit' /></li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
}

export default SignupForm;