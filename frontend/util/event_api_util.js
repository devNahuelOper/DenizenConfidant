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

// export const fetchEvent = event => (
//   $.ajax({
//     method: 'GET',
//     url: 'api/events/event'
//   })
// );

export const createEvent = event => (
  $.ajax({
    method: 'POST',
    url: 'api/events',
    data: { event }
  })
);

export const updateEvent = event => (
  $.ajax({
    method: 'PATCH',
    url: `api/events/${event.id}`,
    data: { event }
  })
);

export const deleteEvent = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/events/${id}`
  })
);

