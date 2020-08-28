
export const fetchAllNews = () => (
  $.ajax({
    url: 'api/news'
  })
);

export const fetchNews = newsId => (
  $.ajax({
    url: `api/news/${newsId}`
  })
);

// export const fetchNews = news => (
//   $.ajax({
//     url: 'https://cors-anywhere.herokuapp.com/https://www.residentadvisor.net/news',
//     data: news
//   })
// )