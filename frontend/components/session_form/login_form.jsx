import React from 'react';
import { Link } from 'react-router-dom';



class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.receiveErrors([]);
  }

  // componentWillUnmount() {
  //   this.props.clearErrors();
  // }

  update(field) {
    return e => {
      this.props.clearErrors(); 
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="error">
           <p>{error}</p>
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
                <li className="form"><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Register</Link></li>
                <li><Link to="/">Take me back home</Link></li>
              </ul>
            </section>

          </div>
        <div className="login-form-container">

          {/* {this.renderErrors()} */}
          <form onSubmit={this.handleSubmit} className="login-form">

            <br/>
            <ul>
              <li>Username or email /</li>
              <li>
                <input
                  style={errors.length ? errorStyle : { border: '1px solid rgb(46, 46, 46)' }} 
                  type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"/>
                 
                  {/* {this.state.session.errors[0]} */}
                {/* <p className="reg-error">{errors['username']}</p> */}
                </li>
             
            {/* <br/> */}
              <li>Password /</li>
            <li>
              <input
                style={errors.length ? errorStyle : { border: '1px solid rgb(46, 46, 46)' }} 
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              /></li>
              <div className="error-container">
              <p className="errors">{this.props.errors[0]}</p>
              </div>
              {/* <p className="inlineError">{this.localErrors.username}</p> */}
            {/* <br/>    */}
            <li><input id="check-box" type="checkbox"/>'member?
              <img src={window.memberUrl} id="member"/>
            </li>
            <li><input className="login-button" type="submit" value={this.props.formType} /></li>
            </ul>
         </form>

        </div>
      </div>
    )
  }
}

export default LoginForm;