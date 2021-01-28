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
    const { currentUser } = this.props;

    return (
      <React.Fragment>
        <TitleComponent title="DC: My DJs" />
        <div className="user-profile" id="user-djs">
          <header>
            <div id="nav-container">
              <NavBar title="My DJs" entity="User" />
            </div>
          </header>
          <div className="my-djs">
            {currentUser.djs.length ? (
              <ul className="user-djs-list">
                {currentUser.djs.map((dj, i) => (
                  <li key={i}>
                    <article>
                      <figure className={dj.photoUrl ? 'user-dj-img' : 'user-dj-noimg'}>
                        { dj.photoUrl && <img src={dj.photoUrl} alt={dj.name} />}
                      </figure>
                      <div className="user-dj-info">
                        <h2>{dj.name}</h2>
                        <Link to={`/djs/${dj.id}/edit`}>Manage DJ Profile</Link>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            ) : (
              <h1>No DJ profiles under your administration.</h1>
            )}
          </div>
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