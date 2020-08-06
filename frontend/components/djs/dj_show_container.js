import { connect } from 'react-redux';
import DjShow from './dj_show';
import { fetchDj } from '../../actions/dj_actions';
import { fetchGenres } from '../../actions/genre_actions';



const mapStateToProps = (state, ownProps) => {
  return {
    dj: state.entities.djs[ownProps.match.params.djId],
    // name: state.entities.djs[ownProps.match.params.djId].name,
    genres: Object.values(state.entities.genres)
  }
};

const mapDispatchToProps = dispatch => ({
  fetchDj: djId => dispatch(fetchDj(djId)),
  fetchGenres: () => dispatch(fetchGenres())
});

export default connect(mapStateToProps, mapDispatchToProps)(DjShow);