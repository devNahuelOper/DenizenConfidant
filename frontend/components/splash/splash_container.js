import { connect } from 'react-redux';
import SplashPage from './splash';
import { fetchDjs } from '../../actions/dj_actions';
import { fetchAllNews } from '../../actions/news_actions';

const splashDjs = ["Gesaffelstein", "Deadmau5", "No Mana", "Noisuf-X", "Kayzo", "Eric Prydz"];

const mapStateToProps = (state) => {
  const hasSongs = _.pickBy(state.entities.djs, (dj) => Boolean(dj.songsUrl));
  return {
    djs: Object.values(state.entities.djs)
    .filter(dj => splashDjs.includes(dj.name))
    .reduce((obj, dj) => {
      return {
        ...obj,
        [dj.name]: dj.id
      };
    }, {}),
    randDjs: _.sampleSize(hasSongs, 6),
    news: Object.values(state.entities.news)
  }
};

const mapDispatchToProps = dispatch => ({
  fetchDjs: (djs) => dispatch(fetchDjs(djs)),
  fetchAllNews: news => dispatch(fetchAllNews(news))
})

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);