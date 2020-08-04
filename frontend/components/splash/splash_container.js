import { connect } from 'react-redux';
import SplashPage from './splash';
import { fetchDjs } from '../../actions/dj_actions';
import { fetchGenres } from '../../actions/genre_actions';
import { fetchEvents } from '../../actions/event_actions';


const mapStateToProps = (state) => {
  return {
    djs: Object.values(state.entities.djs),
    genres: Object.values(state.entities.genres),
    events: Object.values(state.entities.events)
  }
};

const mapDispatchToProps = dispatch => ({
  fetchDjs: () => dispatch(fetchDjs()),
  fetchGenres: () => dispatch(fetchGenres()),
  fetchEvents: () => dispatch(fetchEvents())
})

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);