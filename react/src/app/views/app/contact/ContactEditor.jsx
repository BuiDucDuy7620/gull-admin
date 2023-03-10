import React from "react";
import { Modal, FormGroup, FormControl } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

const ContactEditor = ({
  show,
  initialValues,
  toggleEditorDialog,
  handleFormSubmit,
}) => {
  return (
    <Modal show={show} onHide={toggleEditorDialog} centered>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          {initialValues ? "Update" : "New"} Contact
        </h5>
        <span
          className="close fw-bold fs-3 cursor-pointer"
          aria-label="Close"
          onClick={() => toggleEditorDialog(false)}
        >
          <span aria-hidden="true">&times;</span>
        </span>
      </div>
      <div className="modal-body">
        <Formik
          initialValues={
            initialValues
              ? initialValues
              : { name: "", email: "", phone: "", note: "" }
          }
          validationSchema={contactSchema}
          enableReinitialize={true}
          onSubmit={handleFormSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <FormControl
                  placeholder="Name..."
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={errors.name && touched.name}
                  className="px-1 mb-2"
                  value={values.name}
                ></FormControl>
              </FormGroup>
              <FormGroup>
                <FormControl
                  placeholder="Enter email...."
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={errors.email && touched.email}
                  className="px-1 mb-2"
                  value={values.email}
                ></FormControl>
              </FormGroup>
              <FormGroup>
                <FormControl
                  placeholder="Phone...."
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={errors.phone && touched.phone}
                  className="px-1 mb-2"
                  value={values.phone}
                ></FormControl>
              </FormGroup>
              <FormGroup>
                <FormControl
                  placeholder="Notes...."
                  name="note"
                  as="textarea"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={errors.note && touched.note}
                  className="px-1 mb-2"
                  value={values.note}
                ></FormControl>
              </FormGroup>
              <div className="modal-footer border-0">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => toggleEditorDialog(false)}
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

const contactSchema = yup.object().shape({
  name: yup.string().required("title is required"),
  email: yup.string().email().required("note is required"),
  phone: yup.string().required("note is required"),
});

export default ContactEditor;
