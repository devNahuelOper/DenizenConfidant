import React from "react";
import { Link } from "react-router-dom";
import { TitleComponent } from "../../title_component.jsx";
import SubnavToggle from "../../subnav/subnav";
import NavBar from "../../navbar/navbar";

class UpdateDjForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.dj;
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.dj);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchDj(this.props.match.params.djId);
    // console.log('Mounted', this.props);
  }


  render() {
    const { dj, currentUser } = this.props;
    if (!dj) return null;

    const { name, nationality, genre, bio } = this.state;

    return (
      <React.Fragment>
        <TitleComponent title={`DC: Update ${dj.name}`} />
        <div className="user-profile" id="update-dj">
          <header>
            <div id="nav-container">
              <NavBar
                title="DJ Management"
                entity="Dj"
                hasLinks={true}
                path={[`/users/${currentUser.id}/djs`, "#"]}
                label={["My DJs", `${dj.name}`]}
                type="form"
              />
            </div>
          </header>
          <div className="subnav-container">
            <section id="subnav">
              <ul>
                <li>
                  <Link to={`/users/${currentUser.id}/djs`}>My DJs</Link>
                </li>
                <li className="form">
                  <Link to="#">Core Details</Link>
                </li>
              </ul>
            </section>
            <SubnavToggle
              currentUser={currentUser}
              title="Core Details"
              labels={["My DJs"]}
              paths={[`/users/${currentUser.id}/djs`]}
            />
          </div>
          <div className="dj-form-container">
            <div className="form-wrap">
              <form className="update-dj-form">
                <label htmlFor="name">
                  DJ Name / <br />
                  <input type="text" className="update-input" name="name" value={name}/>
                </label>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UpdateDjForm;
