import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => ({
  event: state.events[ownProps.match.params.event.id]
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);