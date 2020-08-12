import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class UpdateEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleFile = this.handleFile.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);
  }


  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    const { event, currentUser } = this.props;

    if (!event) return null;
    return (
      <div className="create-event">
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
            <section className="eventform-header">
              {/* <Link to='/events'><img id="prev" src={window.prevUrl} alt="Back" /> My Events</Link> */}
              <Link to={`/users/${currentUser.id}/events`}><img id="prev" src={window.prevUrl} alt="Back" /> My Events</Link>
              <h1>Event management</h1>
            </section>
          </section>
        </div>
        <div className="subnav-container">
          <section id="subnav">
            <ul>
              <li><Link to={`/users/${currentUser.id}/events`}>Overview</Link></li>
              <li className="form"><Link to={`/users/${currentUser.id}/events`}>Submit update</Link></li>
            </ul>
          </section>
          <SubnavToggle />
        </div>
        <div className="eventform-subheader-container">
          <section className="eventform-subheader">
            <ul className="details">
              <li>
                <small>Status /</small> <br />
                  Any changes you make will be instantly applied to the live event listing.
                </li>
            </ul>
          </section>
        </div>
        <div className="event-form-container">
          <div className="form-wrap">

          </div>
        </div>

      </div>
    )
  }
};

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
    return (
      <div className="subnav-toggle" id={this.state.drop ? "expand" : "normal"}>
        <button className="subnav-drop" onFocus={this.clicker} onTap={this.clicker} onBlur={this.leave}> <span>Overview <small>⬇︎</small></span>
          <ul className={this.state.drop ? "reveal" : "hide"}>
            {/* <li><Link className="log-link" onClick={this.leave} to="/signup">Register</Link></li> */}
            <li className="form"><Link to={`/users/${currentUser.id}/events`}>Submit update</Link></li>
          </ul>
        </button>
      </div>
    )
  }
}

export default withRouter(UpdateEventForm);