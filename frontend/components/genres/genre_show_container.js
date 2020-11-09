import { connect } from "react-redux";
import GenreShow from "./genre_show";
import { fetchGenre } from "../../actions/genre_actions";
import { fetchDjs } from "../../actions/dj_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    genre: state.entities.genres[ownProps.match.params.genreId],
    djs: Object.values(state.entities.djs),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchGenre: (genreId) => dispatch(fetchGenre(genreId)),
  fetchDjs: () => dispatch(fetchDjs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreShow);
