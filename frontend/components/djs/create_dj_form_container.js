import { connect } from "react-redux";
import { createDj, receiveDjErrors } from "../../actions/dj_actions";
import { fetchGenres } from "../../actions/genre_actions";
import {
  fetchCurrentUser,
  getCurrentUser,
} from "../../actions/session_actions";
import CreateDjForm from "./create_dj_form";

const mapStateToProps = (state) => ({
  dj: {
    name: "",
    genre: "",
    nationality: "",
    bio: "",
  },
  errors: state.errors.djs,
  currentUser: getCurrentUser(state),
  genres: Object.values(state.entities.genres),
});

const mapDispatchToProps = (dispatch) => ({
  createDj: (dj) => dispatch(createDj(dj)),
  receiveDjErrors: (errors) => dispatch(receiveDjErrors(errors)),
  fetchGenres: () => dispatch(fetchGenres()),
  fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateDjForm);
