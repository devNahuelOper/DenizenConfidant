import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllNews } from "../../actions/news_actions";
import { formatDateNews } from "../../util/date_util";

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
        {news.slice(6).map((nws) => (
          <section key={nws.id} className="main-news">
            <div className="nahuel-frame">
              <img
                src={window.nahuelUrl}
                alt="Blurred Nahuel Photo"
                id="nahuel-pre"
              />
              <Link to={`/news/${nws.id}`}>
                <img src={window.nahuelUrl} alt="Nahuel Photo" id="nahuel" />
              </Link>
            </div>
            <span className="main-news-hold">
              <p className="news-date">{formatDateNews(nws.created_at)}</p>
              <Link to={`/news/${nws.id}`}>
                <h1>{nws.title}</h1>
              </Link>
            </span>
          </section>
        ))}
        <ul className="newslist">
          {news.slice(0, 6).map((nws, i) => (
            <li key={i}>
              <article className="newspiece">
                <p className="news-date">{formatDateNews(nws.updated_at)}</p>
                <Link to={`/news/${nws.id}`}>
                  <span
                    id={`${nws.title.split(" ")[0].toLowerCase()}-frame`}
                    className="news-img-frame"
                  >
                    <img
                      src={nws.photoUrl}
                      alt={`${nws.title.split(" ")[0]}-photo`}
                    />{" "}
                    <br />
                  </span>
                  <h1>{nws.title}</h1>
                </Link>
                <p className="news-blurb">{nws.blurb}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    news: Object.values(state.entities.news),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllNews: (news) => dispatch(fetchAllNews(news)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsIndex);
