import * as NewsApiUtil from '../util/news_api_util';

export const RECEIVE_ALL_NEWS = 'RECEIVE_ALL_NEWS';

export const receiveAllNews = news => ({
  type: RECEIVE_ALL_NEWS,
  news
});

export const fetchAllNews = news => dispatch => (
  NewsApiUtil.fetchAllNews(news)
    .then(news => dispatch(receiveAllNews(news)))
);