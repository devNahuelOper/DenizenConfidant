import React from 'react';
import { Link } from 'react-router-dom';
import EventIndexItem from './event_index_item';



class EventIndex extends React.Component {

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const { events } = this.props;

    return (
      <div>
        <ul>
          {events.map(event => 
          <EventIndexItem key={event.id} event={event}/>
            )}
        </ul>
        <Link></Link>
      </div>
    )
  }
};

export default EventIndex;