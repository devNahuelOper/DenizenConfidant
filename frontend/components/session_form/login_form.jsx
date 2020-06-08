import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
        <div className="login-form-container">

          {this.renderErrors()}
          <form onSubmit={this.handleSubmit} className="login-form">

            <br/>
            <ul>
              <li>Username or email/</li>
              <li><input 
                  type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"/></li>
            <br/>
              <li>Password/</li>
            <li><input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              /></li>
            <br/>   
            <li><input className="login-button" type="submit" value={this.props.formType} /></li>
            </ul>
         </form>

        </div>
      </div>
    )
  }
}

export default LoginForm;