import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { receiveErrors, clearErrors, login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = ( state ) => ({
  user: { username: '', password: '' },
  errors: state.errors.session,
  formType: 'Login',
  navLink: <Link to="/signup">Register</Link>,
});

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    demoUser: () => dispatch(login({ username: 'deadmau5', password: 'stereo', email: 'mau5trap@deadmau5.com', email_confirmation: 'mau5trap@deadmau5.com', fname: 'Joel', lname: 'Zimmerman', gender: "Male" })),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);