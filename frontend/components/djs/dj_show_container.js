import { connect } from 'react-redux';
import DjShow from './dj_show';
import { fetchDj } from '../../actions/dj_actions';



const mapStateToProps = (state, ownProps) => {
  return {
    dj: state.entities.djs[ownProps.match.params.djId],
    name: state.entities.djs[ownProps.match.params.djId].name
  }
};

const mapDispatchToProps = dispatch => ({
  fetchDj: djId => dispatch(fetchDj(djId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DjShow);