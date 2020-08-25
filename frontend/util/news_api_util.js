

// const content = weBrowser.Document.getElementsByClassName('content-list')[0];

// export const fetchAllNews = news => (
//   $.ajax({
//     url: 'https://cors-anywhere.herokuapp.com/https://www.residentadvisor.net/news',
//     data: news,
//     dataType: 'html',
//     success: 'success'
//   })
// )

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