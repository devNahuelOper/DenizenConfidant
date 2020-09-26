import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/navbar';
import SubnavToggle from '../subnav/subnav';
import {
  toggleSearch
} from '../../util/search_util';


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
    window.scrollTo(0, 0);
    toggleSearch();
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
        <header>
          <div id="nav-container">
            <NavBar title="Your account" entity="User"/>
          </div>
        </header>
          <div className="subnav-container">
            <section id="subnav">
              <ul>
                <li className="form"><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Register</Link></li>
                <li><Link to="/">Take me back home</Link></li>
              </ul>
            </section>
            {/* <SubnavToggle /> */}
          <SubnavToggle
            title="Login"
            labels={['Register', 'Take me back home']}
            paths={['/signup', '/']} />
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

// class SubnavToggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       drop: false
//     }
//     this.clicker = this.clicker.bind(this);
//     this.leave = this.leave.bind(this);
//     this.mobileDrop = this.mobileDrop.bind(this);
//   }

//   clicker(e) {
//     this.setState({ "drop": true });
//   }

//   leave(e) {
//     this.setState({ "drop": false });
//   }

//   mobileDrop(e) {
//     e.preventDefault();
//     this.setState({ "drop": true }); status
//     $('body').on('click', e => {
//       const drop = $('.subnav-drop');
//       if (drop !== e.currentTarget) {
//         this.leave();
//       }
//     });
//   }

//   render() {
//     return(
//       <div className="subnav-toggle" id={this.state.drop ? "expand" : "normal"}>
//         <button className="subnav-drop" onFocus={this.clicker} onBlur={this.leave}> <span onClick={this.mobileDrop}>Login <small>⬇︎</small></span> 
//           <ul className={this.state.drop ? "reveal" : "hide"}>
//             <li><Link className="log-link" onClick={this.leave} to="/signup">Register</Link></li>
//             <li><Link className="log-link" onClick={this.leave} to="/">Take me back home</Link></li>
//           </ul>
//         </button>
//       </div>
//     )
//   }

// }
// onBlur = { this.leave }
export default LoginForm;