import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent } from '../../actions/event_actions';

// const mapStateToProps = (state, { match }) => {
//   // event: state.entities[ownProps.match.params.event.id]
//   const eventId = parseInt(match.params.event.id);
//   const event = fetchEvent(state.entities, eventId);
//   return {
//     eventId,
//     event
//   };
// };

const mapStateToProps = (state, ownProps) =>{ 
  // debugger
 return {
  event: state.entities.events[ownProps.match.params.event.id]
 }
};

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);