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

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchDj(this.props.match.params.djId);
  }

  render() {
    const { dj, currentUser } = this.props;
    if (!dj) return null;

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
              path={`/users/${currentUser.id}/djs`}
              label="My DJs"
              type="form"
            />
            </div>
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default UpdateDjForm;