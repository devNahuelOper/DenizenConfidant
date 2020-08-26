import { connect } from 'react-redux';
import { fetchEvent, updateEvent, updateEventPhoto, receiveEventErrors, clearEventErrors } from '../../actions/event_actions';
import { fetchCurrentUser, getCurrentUser } from '../../actions/session_actions';
import UpdateEventForm from './update_event_form';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: getCurrentUser(state),
    event: state.entities.events[ownProps.match.params.eventId],
  }
  // errors: state.errors.events
};

const mapDispatchToProps = dispatch => ({
  fetchEvent: eventId => dispatch(fetchEvent(eventId)),
  fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId)),
  updateEvent: (event, id) => dispatch(updateEvent(event, id)),
  updateEventPhoto: (event, id) => dispatch(updateEventPhoto(event, id)),
  // receiveEventErrors: errors => dispatch(receiveEventErrors(errors)),
  clearEventErrors: () => dispatch(clearEventErrors),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEventForm);