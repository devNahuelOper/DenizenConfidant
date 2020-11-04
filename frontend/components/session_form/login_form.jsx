import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../navbar/navbar";
import SubnavToggle from "../subnav/subnav";
import { toggleSearch } from "../../util/search_util";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye as farEye } from "@fortawesome/fontawesome-free-regular";
import { faEyeSlash as farEyeSlash } from "@fortawesome/fontawesome-free-regular";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderError = this.renderError.bind(this);
    this.showPassword = this.showPassword.bind(this);
    this.hidePassword = this.hidePassword.bind(this);
    this.rememberMe = this.rememberMe.bind(this);
  }

  componentDidMount() {
    this.props.receiveErrors([]);
    window.scrollTo(0, 0);
    toggleSearch();
    // console.log(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
      this.props.receiveErrors([]);
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  showPassword() {
    this.setState({ pwShown: true });
  }

  hidePassword() {
    this.setState({ pwShown: false });
  }

  rememberMe() {
    if (this.state.rememberMe == false) {
      this.setState({ rememberMe: true });
      localStorage.setItem("username", this.state.username);
      localStorage.setItem("password", this.state.password);
      localStorage.setItem("rememberMe", true);
    } else {
      this.setState({ rememberMe: false });
      localStorage.setItem("rememberMe", false);
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }
    // console.log(this.state);
  }

  renderError(field) {
    const errors = this.props.errors;
    return errors.some((error) => error.includes(field));
  }

  render() {
    let length = this.state.username.length;
    const { errors } = this.props;
    const { pwShown } = this.state;
    const errorStyle = {
      outline: "2px solid #e10",
      border: "1px solid rgb(46, 46, 46)",
    };
    return (
      <div>
        <header>
          <div id="nav-container">
            <NavBar title="Your account" entity="User" />
          </div>
        </header>
        <div className="subnav-container">
          <section id="subnav">
            <ul>
              <li className="form">
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Register</Link>
              </li>
              <li>
                <Link to="/">Take me back home</Link>
              </li>
            </ul>
          </section>
          <SubnavToggle
            title="Login"
            labels={["Register", "Take me back home"]}
            paths={["/signup", "/"]}
          />
        </div>

        <div className="login-form-container">
          <div className="form-wrap">
            <form onSubmit={this.handleSubmit} className="login-form">
              <br />
              <ul>
                <li>Username /</li>
                <li>
                  <input
                    style={
                      this.renderError("username")
                        ? errorStyle
                        : { border: "1px solid rgb(46, 46, 46)" }
                    }
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.update("username")}
                    // onKeyPress={() => this.props.receiveErrors([])}
                    className="login-input"
                  />
                  {this.renderError("username") && length <= 0 ? (
                    <div id="username-error" className="errors">
                      Username field is required
                    </div>
                  ) : (
                    ""
                  )}
                </li>

                <li>Password /</li>
                <li className="password-hold">
                  <input
                    style={
                      errors.length
                        ? errorStyle
                        : { border: "1px solid rgb(46, 46, 46)" }
                    }
                    type={pwShown ? "text" : "password"}
                    value={this.state.password}
                    onChange={this.update("password")}
                    className="login-input"
                  />
                  <FontAwesomeIcon
                    icon={pwShown ? farEyeSlash : farEye}
                    onClick={pwShown ? this.hidePassword : this.showPassword}
                    className="togglePassword"
                    id={pwShown ? "hidePw" : "showPw"}
                  />
                </li>
                <div className="error-container">
                  <p className="errors">{errors[0]}</p>
                </div>

                <li>
                  <input
                    id="check-box"
                    type="checkbox"
                    checked={this.state.rememberMe}
                    onChange={this.rememberMe}
                  />
                  'member?
                  <img src={window.memberUrl} id="member" />
                </li>
                <li>
                  <input
                    className="login-button"
                    type="submit"
                    value={this.props.formType}
                  />
                </li>
              </ul>
            </form>
            <div className="demo-login">
              <span id="demo-notice">Or login to DC as a Demo User/</span>
              <button id="demo-button" onClick={this.props.demoUser}>
                Login with{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
