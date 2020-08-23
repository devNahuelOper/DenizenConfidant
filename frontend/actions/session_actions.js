import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_SESSION_ERRORS';
// export const UPDATE_DEFAULT_REGION = 'UPDATE_DEFAULT_REGION';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

// export const login = user => dispatch => (
//   APIUtil.login(user).then(user => (
//     dispatch(receiveCurrentUser(user))
//   ))
// );

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(logoutCurrentUser())
  ))
); 

export const fetchCurrentUser = (id) => (dispatch) => (
  APIUtil.fetchCurrentUser(id)
    .then(user => dispatch(receiveCurrentUser(user)))
);

export const getCurrentUser = (state) => {
  if (!state.session.id) return {};
  const user = state.entities.users[state.session.id];
  return {
    ...user,
    ...state.session,
  };
};