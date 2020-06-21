import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.event.id);
  }

  render() {
    const { event } = this.props;

    return (
      <div>
        <section className="eventshow-header">
        <Link to='/events'>Back to events</Link>
        <br/>
        <h1>{event.name} at {event.venue}</h1>
        </section>
        <br/>
        <ul>
          <li>
            <section className="eventshow-subheader">
              <h3>{event.date}</h3> 
              <h3>{event.venue}</h3>
            </section>
          </li>
          <li className="eventshow-details">
            <span>{event.headliners}</span>
            <p>{event.description}</p>
          </li>
        </ul>
      </div>
    )
  }
};

export default EventShow;