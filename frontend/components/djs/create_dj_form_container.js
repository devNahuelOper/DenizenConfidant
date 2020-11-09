import { connect } from "react-redux";
import { createDj, receiveDjErrors } from "../../actions/dj_actions";
import { fetchGenres } from "../../actions/genre_actions";
import CreateDjForm from "./create_dj_form";

const mapStateToProps = (state) => ({
  dj: {
    name: "",
    genre: "",
    nationality: "",
    bio: "",
  },
  errors: state.errors.djs,
  genres: Object.values(state.entities.genres),
});

const mapDispatchToProps = (dispatch) => ({
  createDj: (dj) => dispatch(createDj(dj)),
  receiveDjErrors: (errors) => dispatch(receiveDjErrors(errors)),
  fetchGenres: () => dispatch(fetchGenres()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateDjForm);
