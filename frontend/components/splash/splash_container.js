import { connect } from 'react-redux';
import SplashPage from './splash';
import { fetchDjs } from '../../actions/dj_actions';

const mapStateToProps = (state) => {
  return {
    djs: Object.values(state.entities.djs)
  }
};

const mapDispatchToProps = dispatch => ({
  fetchDjs: () => dispatch(fetchDjs())
})

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);