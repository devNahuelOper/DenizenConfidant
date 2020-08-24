export const fetchNews = news => (
  $.ajax({
    url: 'https://cors-anywhere.herokuapp.com/https://www.residentadvisor.net/news',
    data: news
  })
)