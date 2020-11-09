import { connect } from "react-redux";
import GenreIndex from "./genre_index";
import { fetchGenres } from "../../actions/genre_actions";

const mapStateToProps = (state) => {
  return {
    genres: Object.values(state.entities.genres),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchGenres: () => dispatch(fetchGenres()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreIndex);
