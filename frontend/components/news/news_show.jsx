import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNews } from '../../actions/news_actions';
import { formatDateNewsShow } from '../../util/date_util';
import { toggleSearch } from '../../util/search_util';
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
    // const newsTime = () => {
    //   const split = formatDateNewsShow(news.created_at).split('~');
    //   split.map((part, i) => {
    //     return {
         
    //     }
    //   })
    // }
    const newsTime = formatDateNewsShow(news.created_at).split('~');
    return (
    <React.Fragment>
      <TitleComponent title={`DC News: ${news.title}`} />
      <div className="news-show">
        <header>
          <div className="news-nav-container">
            <section className="news-nav">
              <nav>
                <Link to="/" title="Home"><img src={window.logoUrl} id="logo" /></Link>
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
              {news.blurb}
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