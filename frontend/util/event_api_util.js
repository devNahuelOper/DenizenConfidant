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

export const createEvent = eventData => (
  $.ajax({
    method: 'POST',
    url: 'api/events',
    data:  eventData ,
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

export const deleteEvent = eventId => (
  $.ajax({
    method: 'DELETE',
    url: `api/events/${eventId}`
  })
);

