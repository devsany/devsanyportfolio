import { ErrorMessage, FastField, Field, Form, Formik } from "formik";
import React from "react";

const initialState = {
  name: "",
  email: "",
  address: "",
  education: [""],
};
const onSubmit = (values) => {
  console.log(values);
};

const validation = (values) => {
  const error = {};
  if (!values.name) {
    error.name = "require";
  }
  if (!values.email) {
    error.email = "require";
  }
  if (!values.address) {
    error.address = "require";
  }
  return error;
};

const Formiks = () => {
  return (
    <div>
      <Formik
        initialValues={initialState}
        onSubmit={onSubmit}
        validate={validation}
      >
        <Form>
          <div>
            <label htmlFor="name">User Name</label>
            <br />
            <Field id="name" name="name" placeholder="Enter your name" />
            <div className="error">
              <ErrorMessage name="name" />
            </div>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <br />
            <Field id="email" name="email" placeholder="enter your Email" />
            <div className="error">
              <ErrorMessage name="email" />
            </div>
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <br />
            <Field
              id="address"
              name="address"
              placeholder="Enter your address"
            />
            <div className="error">
              <ErrorMessage name="address" />
            </div>
          </div>
          {/* <div>
            <label htmlFor="name">Education</label>
            <Field id="name" name="name" />
          </div> */}
          <button className="submit_button" type="submit">
            Submit
          </button>
          <br />
          <button className="submit_button" type="reset">
            Reset
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Formiks;
