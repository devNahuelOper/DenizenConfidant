import { connect } from 'react-redux';
import DjIndex from './dj_index';
import { fetchDjs } from '../../actions/dj_actions';
import { fetchGenres } from '../../actions/genre_actions';

const mapStateToProps = (state) => {
  return {
    djs: Object.values(state.entities.djs).sort((a, b) =>
      a.name.localeCompare(b.name)
    ),
    genres: Object.values(state.entities.genres),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchDjs: () => dispatch(fetchDjs()),
  fetchGenres: () => dispatch(fetchGenres())
})

export default connect(mapStateToProps, mapDispatchToProps)(DjIndex);