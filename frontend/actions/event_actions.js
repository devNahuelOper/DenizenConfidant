import * as EventApiUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';

export const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const removeEvent = id => ({
  type: REMOVE_EVENT,
  id
});

export const fetchEvents = events => dispatch => (
  EventApiUtil.fetchEvents(events)
    .then(events => dispatch(receiveEvents(events)))
);

export const fetchEvent = id => dispatch => (
  EventApiUtil.fetchEvent(id)
    .then(event => dispatch(receiveEvent(event)))
);

export const createEvent = event => dispatch => (
  EventApiUtil.createEvent(event)
    .then(event => dispatch(reveiveEvent(event)))
);

export const updateEvent = event => dispatch => (
  EventApiUtil.updateEvent(event)
    .then(event => dispatch(receiveEvent(event)))
);

export const deleteEvent = id => dispatch => (
  EventApiUtil.deleteEvent(id)
    .then(() => dispatch(removeEvent(id)))
);