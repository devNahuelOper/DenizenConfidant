import { connect } from 'react-redux';
import EventIndex from './event_index';
import { fetchEvents, deleteEvent } from '../../actions/event_actions';

const mapStateToProps = state => ({
  events: Object.values(state.events)
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
  deleteEvent: id => dispatch(deleteEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);