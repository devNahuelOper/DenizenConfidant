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

export const createEvent = createEventForm => (
  $.ajax({
    method: 'POST',
    url: 'api/events',
    data:   createEventForm,
    contentType: false,
    processData: false
  })
);

// export const createEvent = event => (
//   $.ajax({
//     method: 'POST',
//     url: 'api/events/create',
//     data: { event },
//     contentType: false,
//     processData: false
//   })
// );

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

