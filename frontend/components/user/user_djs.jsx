import React from "react";
import { connect } from "react-redux";
import {
  fetchCurrentUser,
  getCurrentUser,
} from "../../actions/session_actions";
import { Link } from "react-router-dom";
import NavBar from "../navbar/navbar";
import { TitleComponent } from "../title_component.jsx";

class UserDjs extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   console.log(this.props);
  // }

  render() {
    return (
      <React.Fragment>
        <TitleComponent title="DC: My DJs" />
        <div className="user-profile" id="user-djs">
          <header>
            <div id="nav-container">
              <NavBar title="My DJs" entity="User" />
            </div>
          </header>
        </div>
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});
const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: userId => dispatch(fetchCurrentUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDjs);