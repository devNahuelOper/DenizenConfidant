import { connect } from "react-redux";
import EventShow from "./event_show";
import { fetchEvent } from "../../actions/event_actions";

// const mapStateToProps = (state, { match }) => {
//   // event: state.entities[ownProps.match.params.event.id]
//   const eventId = parseInt(match.params.event.id);
//   const event = fetchEvent(state.entities.events, eventId);
//   return {
//     eventId,
//     event
//   };
// };

const mapStateToProps = (state, ownProps) => {
  return {
    event: state.entities.events[ownProps.match.params.eventId],
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
