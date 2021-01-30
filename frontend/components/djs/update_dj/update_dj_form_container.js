import { connect } from "react-redux";
import {
  fetchDj,
  updateDj,
  receiveDjErrors
} from "../../../actions/dj_actions";
// import { fetchGenres } from "../../../actions/genre_actions";
import {
  fetchCurrentUser,
  getCurrentUser,
} from "../../../actions/session_actions";
import UpdateDjForm from "./update_dj_form";


const mapStateToProps = (state, ownProps) => {
  return {
    dj: state.entities.djs[ownProps.match.params.djId],
    currentUser: getCurrentUser(state),
    genres: Object.values(state.entities.genres).map(genre => genre.name),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchDj: (djId) => dispatch(fetchDj(djId)),
  fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId)),
  updateDj: (dj, id) => dispatch(updateDj(dj, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateDjForm);