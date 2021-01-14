import React from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions/news_actions';
import { formatDateNewsShow, timeSinceBeganCoding } from '../../util/date_util';
import { toggleSearch } from '../../util/search_util';
import NavBar from '../navbar/navbar';
import { TitleComponent } from '../title_component.jsx';

class NewsShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNews(this.props.match.params.newsId);
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    toggleSearch();
  }

  render() {
    const { news } = this.props;
    if (!news) return null;

    const newsTime = formatDateNewsShow(news.updated_at).split('~');

    const monthsSince = timeSinceBeganCoding();
    const specialBlurb = news.blurb.replace("Eight", monthsSince);
    return (
    <React.Fragment>
      <TitleComponent title={`DC News: ${news.title}`} />
      <div className="news-show">
        <header>
          <div className="news-nav-container">
            <NavBar 
              title={news.title}
              entity="new"
              hasLinks={true}
              path="/"
              label="News"/>
          </div>
        </header>
        <div className="news-subheader-container">
          <section className="news-subheader">
            <ul className="details">
              <li>
                <small>Words /</small><br/>
                {news.author}
              </li>
              <li>
                <small>Published /</small><br/>
                <ul className="date-split">
                {newsTime.map((part, i) => 
                  <li key={i} id={`date-${i}`}>{part}</li>
                )}
                </ul>
              </li>
              <li>
                <small>Category /</small><br/>
                {news.category}
              </li>
            </ul>
          </section>
        </div>
        <div className="news-main">
          <section className="blurb-wrap">
            <p className="blurb">
              {news.author === "Nahuel Gorosito" ? specialBlurb : news.blurb}
            </p>
          </section>
          <section className="body-wrap">
              <div className={`${news.title.split(' ')[0].toLowerCase()}-frame`}>
              <img src={news.photoUrl} alt={`${news.title.split(' ')[0]}-photo`} className="news-photo" id={`${news.title.split(' ')[0]}-photo`}/>
            </div>
            <ul className="body">
              {news.body.split('~').map((para, i) => 
                <li key={i}>
                  <strong>{para.trim().split(' ')[0]}</strong> {para.trim().split(' ').slice(1).join(' ')}
                </li>
              )}
                <br />
            </ul>
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