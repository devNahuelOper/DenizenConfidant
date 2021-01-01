import { connect } from "react-redux";
import EventIndex from "./event_index";
import { fetchEvents, deleteEvent } from "../../actions/event_actions";

const mapStateToProps = (state) => {
  return {
    events: Object.values(state.entities.events),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
  deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventIndex);
