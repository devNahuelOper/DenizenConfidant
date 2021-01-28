import React from "react";
import { Link } from "react-router-dom";
import { TitleComponent } from "../../title_component.jsx";
import SubnavToggle from "../../subnav/subnav";


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
      </React.Fragment>
    );
  }
}

export default UpdateDjForm;