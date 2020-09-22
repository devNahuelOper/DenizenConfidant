import React from 'react';
import { Link } from 'react-router-dom';

class SubnavToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drop: false
    }
    this.clicker = this.clicker.bind(this);
    this.leave = this.leave.bind(this);
    this.mobileDrop = this.mobileDrop.bind(this);
  }

  clicker(e) {
    this.setState({ "drop": true });
  }

  leave(e) {
    this.setState({ "drop": false });
  }


  mobileDrop(e) {
    e.preventDefault();
    this.setState({ "drop": true }); 
    $('body').on('click', e => {
      const drop = $('.subnav-drop');
      if (drop !== e.currentTarget) {
        this.leave();
      }
    });
  }

  render() {
    const { title, paths, labels, currentUser } = this.props;
    
    return (
      <div className="subnav-toggle" id={this.state.drop ? "expand" : "normal"}>
        <button className="subnav-drop" onFocus={this.clicker} onBlur={this.leave}> <span onClick={this.mobileDrop}>{title} <small>⬇︎</small></span>
          <ul className={this.state.drop ? "reveal" : "hide"}>
            {/* <li><Link className="log-link" to={`/users/${currentUser.id}/events`}>My Events</Link></li> */}
            {paths.map((path, idx) => 
            <li key={idx}>
              <Link className="log-link" to={path}>{labels[idx]}</Link>
            </li>
              )}
              {
                window.location.hash === `#/users/${currentUser.id}` &&
              <li id="calendar-toggle" onClick={this.props.toggleCalendar}><Link className="log-link" to={`/users/${currentUser.id}`}>Calendar</Link></li>
              }
          </ul>
        </button>
      </div>
    )
  }
}

export default SubnavToggle;