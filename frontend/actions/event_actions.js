import * as EventApiUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';
export const CLEAR_EVENT_ERRORS = 'CLEAR_EVENT_ERRORS';

export const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const removeEvent = eventId => ({
  type: REMOVE_EVENT,
  eventId
});

export const receiveEventErrors = errors => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
});

export const clearEventErrors = () => ({
  type: CLEAR_EVENT_ERRORS
});

export const fetchEvents = events => dispatch => (
  EventApiUtil.fetchEvents(events)
    .then(events => dispatch(receiveEvents(events)))
);

export const fetchEvent = eventId => dispatch => (
  EventApiUtil.fetchEvent(eventId)
    .then(event => dispatch(receiveEvent(event)))
);

// export const fetchEvent = event => dispatch => (
//   EventApiUtil.fetchEvent(event)
//     .then(event => dispatch(receiveEvent(event)))
// );

// export const createEvent = event => dispatch => (
//   EventApiUtil.createEvent(event)
//     .then(event => dispatch(receiveEvent(event))
//     ), errors => (
//       dispatch(receiveEventErrors(errors.responseJSON))
//     )
// );

export const createEvent = event => dispatch => (
  EventApiUtil.createEvent(event)
    .then(event => dispatch(receiveEvent(event)))
    .fail((errors) => dispatch(receiveEventErrors(errors.responseJSON)))
);

export const updateEvent = (event, id) => dispatch => (
  EventApiUtil.updateEvent(event, id)
    .then((event) => dispatch(receiveEvent(event)))
    .fail((errors) => dispatch(receiveEventErrors(errors.responseJSON)))
);

export const updateEventPhoto = (event, id) => dispatch => (
  EventApiUtil.updateEventPhoto(event, id)
    .then(event => dispatch(receiveEvent(event)))
    .fail((errors) => dispatch(receiveEventErrors(errors.responseJSON)))
);

export const deleteEvent = eventId => dispatch => (
  EventApiUtil.deleteEvent(eventId)
    .then(() => dispatch(removeEvent(eventId)))
);