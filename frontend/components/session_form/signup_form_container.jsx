import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import {
  signup,
  login,
  receiveErrors,
  clearErrors,
} from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = (state) => {
  return {
    user: {
      username: "",
      password: "",
      fname: "",
      lname: "",
      email: "",
      email_confirmation: "",
      region: null,
      language: null,
      birthday: {
        day: 1,
        month: "Jan",
        year: "----",
        daysInMonth: 31,
      },
      gender: "",
    },
    errors: state.errors.session,
    formType: "Register",
    navLink: <Link to="/login">Login</Link>,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    demoUser: () =>
      dispatch(
        login({
          username: "deadmau5",
          password: "stereo",
          email: "mau5trap@deadmau5.com",
          email_confirmation: "mau5trap@deadmau5.com",
          fname: "Joel",
          lname: "Zimmerman",
          gender: "Male",
        })
      ),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
