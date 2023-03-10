import React, { Component } from "react";
import { Formik } from "formik";
import { Form } from "react-bootstrap";

import * as yup from "yup";
import { loginWithEmailAndPassword } from "app/redux/actions/LoginActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const SigninSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("email is required"),
  password: yup
    .string()
    .min(8, "Password must be 8 character long")
    .required("password is required"),
});

class Signin extends Component {
  state = {
    email: "watson@example.com",
    password: "12345678",
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
                  <h3 className="mb-3 text-2 text-center">Welcome back!</h3>
                  <Formik
                    initialValues={this.state}
                    validationSchema={SigninSchema}
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
                        <div className="form-group mb-3 ">
                          <label htmlFor="email">Organization ID</label>
                          <input
                            style={{ backgroundColor: "#E5E5E5" }}
                            className="form-control   position-relative"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                          {errors.email && (
                            <div className="text-danger mt-1 ml-2">
                              {errors.email}
                            </div>
                          )}
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
                        <div className="form-group mb-3">
                          <label htmlFor="password">Password</label>
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
                        <div className="d-flex justify-content-between mb-3">
                          <div className="col-lg-6">
                            <Form.Check
                              name="checkbox1"
                              onChange={handleChange}
                              value="check123"
                              checked={
                                values.checkbox1 &&
                                values.checkbox1.includes("check123")
                              }
                              type="checkbox"
                              id="check1"
                              label="Remember me"
                            />
                          </div>
                          <div className=" text-center">
                            <Link to="/session/forgot-password" className="">
                              <u style={{ color: '#00CDC2' }}>Forgot password?</u>
                            </Link>
                          </div>
                        </div>
                        <button
                          className="btn btn-rounded btn-primary border-0 w-100 my-1 mt-2z"
                          type="submit" style={{ backgroundColor: '#00CDC2' }}
                        >
                          Sign In
                        </button>

                      </form>
                    )}
                  </Formik>

                  <div className="mt-3 text-center">
                    <Link to="/session/Signup" className="text-muted">
                      <u style={{ color: '#00CDC2' }}>Sign up new company account</u>
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
})(Signin);
