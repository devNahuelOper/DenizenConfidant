import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login, receiveErrors, clearErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Register',
    navLink: <Link to="/login">Login</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    demoUser: () => dispatch(login({ username: 'deadmau5', password: 'stereo', fname: 'Joel', lname: 'Zimmerman'})),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);