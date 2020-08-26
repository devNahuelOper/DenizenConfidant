export const fetchEvents = () => (
  $.ajax({
    method: 'GET',
    url: 'api/events',
  })
);

export const fetchEvent = eventId => (
  $.ajax({
    method: 'GET',
    url: `api/events/${eventId}`
  })
);

export const createEvent = event => (
  $.ajax({
    method: 'POST',
    url: 'api/events',
    data: event,
    contentType: false,
    processData: false
  })
);


export const updateEvent = (eventData, id) => (
  $.ajax({
    method: 'PATCH',
    url: `api/events/${id}`,
    data: eventData,
    contentType: false,
    processData: false
  })
);

export const updateEventPhoto = (eventData, id) => (
  $.ajax({
    method: 'PATCH',
    url: `api/events/${id}`,
    data: eventData,
    contentType: false,
    processData: false
  })
);


export const deleteEvent = eventId => (
  $.ajax({
    method: 'DELETE',
    url: `api/events/${eventId}`
  })
);

// export const fetchNews = news => (
//   $.ajax({
//     url: 'https://cors-anywhere.herokuapp.com/https://www.residentadvisor.net/news',
//     data: news
//   })
// )