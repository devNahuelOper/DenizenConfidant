import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { Link } from "react-router-dom";

class WelcomeDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drop: false,
    };
    this.clicker = this.clicker.bind(this);
    this.leave = this.leave.bind(this);
    this.lastOnline = this.lastOnline.bind(this);
    this.mobileDrop = this.mobileDrop.bind(this);
  }

  clicker(e) {
    e.preventDefault();
    this.setState({ drop: true });
  }

  leave(e) {
    this.setState({ drop: false });
  }

  mobileDrop(e) {
    e.preventDefault();
    this.setState({ drop: true });
    status;
    $("body").on("click", (e) => {
      const drop = $(".logout-dropdown");
      if (drop !== e.currentTarget) {
        this.leave();
      }
    });
  }

  lastOnline() {
    let date = new Date();
    window.setTimeout(() => {
      localStorage.setItem("lastOnline", date);
    }, 1000);
  }

  render() {
    const { currentUser, logout } = this.props;

    return (
      <div className="welcome-wrap">
        <button
          onFocus={this.clicker}
          onBlur={this.leave}
          className="logout-dropdown"
        >
          <span onClick={this.mobileDrop}>
            <img src={window.djUrl} id="dj-icon" />
            <h1 id="welcome-msg">
              {" "}
              <strong>Welcome</strong> {currentUser.username}
            </h1>{" "}
            <small>⬇︎</small>
          </span>
          <ul className={this.state.drop ? "reveal" : "hide"}>
            <li>
              <Link
                onClick={this.leave}
                className="log-link"
                to={`/users/${currentUser.id}`}
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                onClick={this.leave}
                className="log-link"
                to={`/users/${currentUser.id}/events`}
              >
                My Events
              </Link>
            </li>
            <li
              className="log-link"
              onClick={logout}
              onMouseUp={this.lastOnline}
            >
              Logout
            </li>
          </ul>
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeDropdown);

