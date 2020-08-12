import { connect } from 'react-redux';
import { fetchEvent, updateEvent, receiveEventErrors, clearEventErrors } from '../../actions/event_actions';
import { fetchCurrentUser, getCurrentUser } from '../../actions/session_actions';
import UpdateEventForm from './update_event_form';

const mapStateToProps = (state, ownProps) => ({
  event: state.entities.events[ownProps.match.params.eventId],
  currentUser: getCurrentUser(state),
  errors: state.errors.events
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: eventId => dispatch(fetchEvent(eventId)),
  fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId)),
  // updateEvent: (id, event) => dispatch(updateEvent(id, event)),
  action: event => dispatch(updateEvent(id, event)),
  receiveEventErrors: errors => dispatch(receiveEventErrors(errors)),
  clearEventErrors: () => dispatch(clearEventErrors),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEventForm);