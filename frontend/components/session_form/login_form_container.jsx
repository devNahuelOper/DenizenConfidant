import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'Login',
  navLink: <Link to="/signup">Register</Link>,
});

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    demoUser: () => dispatch(login({username: 'deadmau5', password: 'stereo'}))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);