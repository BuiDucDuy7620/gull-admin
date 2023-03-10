import React, { Component } from "react";
import { Formik } from "formik";
import { Form } from "react-bootstrap";

import * as yup from "yup";
import { loginWithEmailAndPassword } from "app/redux/actions/LoginActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ForgotPasswordSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("email is required"),
});

class ForgotPassword extends Component {
  state = {
    email: "watson@example.com",
  };

  handleChange = (event) => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (value, { isSubmitting }) => {
    this.props.loginWithEmailAndPassword(value);
  };

  render() {
    return (
      <div
        className="auth-layout-wrap" style={{ backgroundColor: '#f5f5f5' }}
      // style={{
      //   backgroundImage: "url(/assets/images/photo-wide-4.jpg)",
      // }}
      >
        <div className="auth-content-signin" >
          <div className="
          /*card*/
           o-hidden">
            <div className="row">
              <div className="col-md-12">
                <div className="p-4">
                  <div className="auth-logo text-center mb-2">
                    <img src="/assets/images/logoKelick.png" alt="" />
                  </div>
                  <h3 className="mb-3 text-18 text-center">Forget Password</h3>
                  <div className="text-center text-10 mb-3">
                    <span >Enter your registered Customer Email ID and we will send a 6 digits code to your email to reset your password
                    </span>
                    <br />
                  </div>
                  <Formik
                    initialValues={this.state}
                    // validationSchema={SigninSchema}
                    onSubmit={this.handleSubmit}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                    }) => (

                      <form onSubmit={handleSubmit} c>
                        <div className="d-flex justify-content-between mb-3">
                          <div className='col-lg-6'>
                            <Form.Check
                              type="radio"
                              label="Employee Login"
                              name="radio"
                              id="formHorizontalRadios1"
                              value="radio1"
                            />
                          </div>
                          <div clasName='col-lg-6'>
                            <Form.Check
                              type="radio"
                              label="Admin Login"
                              name="radio"
                              id="formHorizontalRadios1"
                              value="radio1"
                            />
                          </div>

                        </div>

                        <div className="form-group mb-3">
                          <label htmlFor="password">Email ID</label>
                          <input
                            style={{ backgroundColor: "#E5E5E5" }}
                            className="form-control "
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                          {errors.password && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.password}
                            </div>
                          )}
                        </div>
                        <button
                          className="btn btn-rounded btn-primary border-0 w-100 my-1 mt-2z"
                          type="submit" style={{ backgroundColor: '#00CDC2' }}
                        >
                          Reset Password
                        </button>

                      </form>
                    )}
                  </Formik>

                  <div className="text-center">
                    <span className="mx-2">Already have an Account?</span>
                    <Link to="/session/Signin" className="">
                      <u style={{ color: '#00CDC2' }}>Login</u>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 text-center "
              // style={{
              //   backgroundSize: "cover",
              //   backgroundImage: "url(/assets/images/photo-long-3.jpg)",
              // }}
              >

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginWithEmailAndPassword: PropTypes.func.isRequired,
  user: state.user,
});

export default connect(mapStateToProps, {
  loginWithEmailAndPassword,
})(ForgotPassword);
