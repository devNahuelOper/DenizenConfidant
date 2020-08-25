import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNews } from '../../actions/news_actions';
import { formatDateNews } from '../../util/date_util';
import { TitleComponent } from '../title_component.jsx';

class NewsShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNews(this.props.match.params.newsId);
  }

  render() {
    const { news } = this.props;
    if (!news) return null;
    return (
    <React.Fragment>
      <TitleComponent title={`DC News: ${news.title}`} />
      <div className="news-show">
        <div className="news-nav-container">
          <section className="news-nav">
            <nav>
              <Link to="/"><img src={window.logoUrl} id="logo" /></Link>
              <ul id="links">
                <li><Link to="/djs">DJs</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/genres">Music</Link></li>
                <li><button id="search">Search</button></li>
              </ul>
            </nav>
            <section className="news-header">
              <Link to='/'><img id="prev" src={window.prevUrl} alt="Back" /> News</Link>
              <h1>{news.title}</h1>
            </section>
          </section>
        </div>
      </div>
    </React.Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    news: state.entities.news[ownProps.match.params.newsId]
  }
};

const mapDispatchToProps = dispatch => ({
  fetchNews: newsId => dispatch(fetchNews(newsId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsShow);