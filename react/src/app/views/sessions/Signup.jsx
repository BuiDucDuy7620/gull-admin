import React, { Component } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Signup extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    repassword: "",
  };

  handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
  };

  render() {
    return (
      <div
        className="auth-layout-wrap"
        style={{ backgroundColor: '#f5f5f5' }}
      >
        <div className="auth-content">
          <div className=" o-hidden">
            <div className="row">


              <div className="">
                <div className="p-4">
                  <div className="auth-logo text-center mb-3">
                    <img src="/assets/images/logoKelick.png" alt="" />
                  </div>
                  <h4 className="mb-3 text-center text-24 mb-3">Register Account</h4>
                  <div className="text-center text-10 mb-3">
                    <span >Sign up for an free account now!
                    </span>
                    <br />
                    <span>
                      Fill in the details of the first organization you will
                    </span>
                    <br />
                    <span>be managing to get started.</span>
                  </div>
                  <Formik
                    initialValues={this.state}
                    validationSchema={SignupSchema}
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
                      <form onSubmit={handleSubmit} className="row">
                        <div className=" col-lg-6">
                          <div className="form-group mb-3">
                            <label htmlFor="username" className="fw-bold">Email ID</label>
                            <input style={{ backgroundColor: '#E5E5E5' }}
                              className="form-control"
                              name="username"
                              type="text"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.username}
                            />
                            {errors.username && touched.username && (
                              <div className="text-danger mt-1 ml-2">
                                {errors.username}
                              </div>
                            )}
                          </div>
                          <div className="form-group mb-3">
                            <label htmlFor="email" className="fw-bold">Phone No.</label>
                            <input style={{ backgroundColor: '#E5E5E5' }}
                              name="email"
                              className="form-control style={{color:#E5E5E5}}"
                              type="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                            />
                            {errors.email && touched.email && (
                              <div className="text-danger mt-1 ml-2">
                                {errors.email}
                              </div>
                            )}
                          </div>
                          <div className="form-group mb-3">
                            <label htmlFor="password" className="fw-bold">Password</label>
                            <input style={{ backgroundColor: '#E5E5E5' }}
                              name="password"
                              className="form-control style={{color:#E5E5E5}}"
                              type="password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                            />
                            {errors.password && touched.password && (
                              <div className="text-danger mt-1 ml-2">
                                {errors.password}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group mb-3">
                            <label htmlFor="username" className="fw-bold">Organization Name</label>
                            <input style={{ backgroundColor: '#E5E5E5' }}
                              className="form-control style={{color:#E5E5E5}}"
                              name="username"
                              type="text"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.username}
                            />
                            {errors.username && touched.username && (
                              <div className="text-danger mt-1 ml-2">
                                {errors.username}
                              </div>
                            )}
                          </div>
                          <div className="form-group mb-3">
                            <label htmlFor="email" className="fw-bold">Organization ID</label>
                            <input style={{ backgroundColor: '#E5E5E5' }}
                              name="email"
                              className="form-control style={{color:#E5E5E5}}"
                              type="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                            />
                            {errors.email && touched.email && (
                              <div className="text-danger mt-1 ml-2">
                                {errors.email}
                              </div>
                            )}
                          </div>
                          <div className="form-group mb-3">
                            <label htmlFor="password" className="fw-bold">Organisation’s Country based in</label>
                            <input style={{ backgroundColor: '#E5E5E5' }}
                              name="password"
                              className="form-control style={{color:#E5E5E5}}"
                              type="password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                            />
                            {errors.password && touched.password && (
                              <div className="text-danger mt-1 ml-2">
                                {errors.password}
                              </div>
                            )}
                          </div>
                        </div>

                        <button
                          className="btn btn-primary border-0 w-50 my-1 mx-auto btn-rounded mt-3 mb-3 "
                          type="submit"
                          style={{ backgroundColor: ' #00CDC2' }}
                        >
                          Sign Up
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
            </div>
          </div>
        </div>
      </div >
    );
  }
}

const SignupSchema = yup.object().shape({
  username: yup.string().required("email is required"),
  email: yup.string().email("Invalid email").required("email is required"),
  password: yup
    .string()
    .min(8, "Password must be 8 character long")
    .required("password is required"),
  repassword: yup
    .string()
    .required("repeat password")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {})(Signup);
