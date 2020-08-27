import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllNews } from '../../actions/news_actions';
import { formatDateNews } from '../../util/date_util';

class NewsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllNews();
  }


  render() {
    const { news } = this.props;
    if (!news) return null;
    return (
      <div className="newsbar">
          {news.slice(6).map(nws => 
          <section key={nws.id} className="main-news">
            {/* <img src={nws.photoUrl} alt={`${nws.title.split(' ')[0]}-photo`}/> */}
              <div className="nahuel-frame">
                <img src={window.nahuelUrl} alt="" id="nahuel-pre" />
                <img src={window.nahuelUrl} alt="" id="nahuel" />
              </div>
            <span className="main-news-hold">
              <p className="news-date">{formatDateNews(nws.created_at)}</p>
              <Link to={`/news/${nws.id}`}>
                  <h1>{nws.title}</h1>
              </Link>  
            </span>
          </section>
            )}
        <ul className="newslist">
          {news.slice(0, 6).map((nws, i) =>
            <li key={i}>
              <article className="newspiece">
          <p className="news-date">{formatDateNews(nws.created_at)}</p> 
                <img src={nws.photoUrl} alt={`${nws.title.split(' ')[0]}-photo`}/> <br/>
                <Link to={`/news/${nws.id}`}>
                  <h1>{nws.title}</h1>
                </Link> 
                {/* <br/> */}
                <p className="news-blurb">{nws.blurb}</p>
              </article>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    news: Object.values(state.entities.news)
  }
};

const mapDispatchToProps = dispatch => ({
  fetchAllNews: news => dispatch(fetchAllNews(news))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsIndex);