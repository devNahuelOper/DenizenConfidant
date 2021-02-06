import * as DjApiUtil from "../util/dj_api_util";

export const RECEIVE_DJS = "RECEIVE_DJS";
export const RECEIVE_DJ = "RECEIVE_DJ";
export const REMOVE_DJ = "REMOVE_DJ";
export const RECEIVE_DJ_ERRORS = "RECEIVE_DJ_ERRORS";
export const CLEAR_DJ_ERRORS = "CLEAR_DJ_ERRORS";

export const receiveDjs = (djs) => ({
  type: RECEIVE_DJS,
  djs,
});

export const receiveDj = (dj) => ({
  type: RECEIVE_DJ,
  dj,
});

export const removeDj = (djId) => ({
  type: REMOVE_DJ,
  djId,
});

export const receiveDjErrors = (errors) => ({
  type: RECEIVE_DJ_ERRORS,
  errors,
});

export const clearDjErrors = () => ({
  type: CLEAR_DJ_ERRORS,
});

export const fetchDjs = (djs) => (dispatch) =>
  DjApiUtil.fetchDjs(djs).then((djs) => dispatch(receiveDjs(djs)));

export const fetchDj = (djId) => (dispatch) =>
  DjApiUtil.fetchDj(djId).then((dj) => dispatch(receiveDj(dj)));

export const createDj = (dj) => (dispatch) =>
  DjApiUtil.createDj(dj)
    .then((dj) => dispatch(receiveDj(dj)))
    .fail((errors) => dispatch(receiveDjErrors(errors.responseJSON)));

export const updateDj = (dj, id) => (dispatch) =>
  DjApiUtil.updateDj(dj, id)
    .then((dj) => dispatch(receiveDj(dj)))
    .fail((errors) => dispatch(receiveDjErrors(errors.responseJSON)));


export const deleteDj = (djId) => (dispatch) =>
  DjApiUtil.deleteDj(djId).then(() => dispatch(removeDj(djId)));
