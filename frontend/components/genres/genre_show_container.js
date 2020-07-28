import { connect } from 'react-redux';
import GenreShow from './genre_show';
import { fetchGenre } from '../../actions/genre_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    genre: state.entities.genres[ownProps.match.params.genreId]
  }
}

const mapDispatchToProps = dispatch => ({
  fetchGenre: genreId => dispatch(fetchGenre(genreId))
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreShow);