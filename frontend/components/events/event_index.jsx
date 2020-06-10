import React from 'react';
import { Link } from 'react-router-dom';
import EventIndexItem from './event_index_item';



class EventIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const { events } = this.props;

    return (
      <div>
        <ul className="eventlist">
          {events.map(event => 
          <EventIndexItem key={event.id} event={event}/>
            )}
        </ul>
        <Link to='/events'>Submit event</Link>
      </div>
    )
  }
};

export default EventIndex;