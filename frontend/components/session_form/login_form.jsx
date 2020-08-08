import React from 'react';
import { Link } from 'react-router-dom';



class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  componentDidMount() {
    this.props.receiveErrors([]);
    const search = document.getElementById('search');
    const searchbar = document.getElementsByClassName('search-container')[0];
    search.onclick = function () {
      searchbar.style.display = 'block';
      search.style.backgroundColor = 'white';
      search.style.color = 'black';
      search.style.borderBottom = '2px solid white';
    }
    window.onclick = function (e) {
      let inSearchbar = searchbar.contains(e.target);
      let inSearch = search.contains(e.target);
      if (inSearchbar || inSearch) {
        return;
      }
      searchbar.style.display = 'none';
      search.style.backgroundColor = 'transparent';
      search.style.color = 'currentColor';
      search.style.borderBottom = 'unset';
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
      this.props.receiveErrors([]);
    }
    // this.props.clearErrors(); 
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }


  // renderErrors() {
  //   return (
  //     <ul className="errors">
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`} className="error">
  //          <p>{error}</p>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  renderError(field) {
    const errors = this.props.errors;
    return errors.some(error => error.includes(field))
  }


  render() {
    let length = this.state.username.length;
    const { errors } = this.props;
    const errorStyle = {
      outline: '2px solid #e10',
      border: '1px solid rgb(46, 46, 46)'
    };
    return (
      <div>
          <div id="nav-container">
            <section id="navbar">
              <nav>
               <Link to="/"><img src={window.logoUrl} id="logo" /></Link>
                <ul id="links">
                  <li><Link to="/djs">DJs</Link></li>
                  <li><Link to="/events">Events</Link></li>
                  <li><Link to="/genres">Music</Link></li>
                  <li><button id="search">Search</button></li>
                </ul>
                </nav>
                <h1>Your account</h1>
            </section> 
          </div>
          <div className="subnav-container">
            <section id="subnav">
              <ul>
                <li className="form"><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Register</Link></li>
                <li><Link to="/">Take me back home</Link></li>
              </ul>
            </section>
            <SubnavToggle />
          </div>
         
        <div className="login-form-container">
        <div className="form-wrap">
          <form onSubmit={this.handleSubmit} className="login-form">

            <br/>
            <ul>
              <li>Username or email /</li>
              <li>
                <input
                  style={this.renderError("username") ? errorStyle : { border: '1px solid rgb(46, 46, 46)' }} 
                  type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  // onKeyPress={() => this.props.receiveErrors([])}
                  className="login-input"/>
                {this.renderError("username") && length <= 0 ? (
                  <div id="username-error" className="errors">
                     Username field is required
                  </div>
                ) : (
                    ""
                  )}
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
              <p className="errors">{errors[0]}</p>
              </div>
     
            <li><input id="check-box" type="checkbox"/>'member?
              <img src={window.memberUrl} id="member"/>
            </li>
            <li><input className="login-button" type="submit" value={this.props.formType} /></li>
            </ul>
          </form>
            <div className="demo-login">
              <span id="demo-notice">Or login to DC as a Demo User/</span>
              <button id="demo-button" onClick={this.props.demoUser}>Login with </button>
            </div>
        </div>
        </div>
      </div>
    )
  }
}

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
    return(
      <div className="subnav-toggle" id={this.state.drop ? "expand" : "normal"}>
        <button className="subnav-drop" onFocus={this.clicker} onTap={this.clicker} onBlur={this.leave}> <span>Login <small>⬇︎</small></span> 
          <ul className={this.state.drop ? "reveal" : "hide"}>
            <li><Link className="log-link" onClick={this.leave} to="/signup">Register</Link></li>
            <li><Link className="log-link" onClick={this.leave} to="/">Take me back home</Link></li>
          </ul>
        </button>
      </div>
    )
  }

}
// onBlur = { this.leave }
export default LoginForm;