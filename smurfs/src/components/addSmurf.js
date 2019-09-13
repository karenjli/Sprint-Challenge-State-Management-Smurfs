import React from "react";
import { Form, Field, withFormik } from "formik";
import axios from "axios";
import { getSmurf } from "../actions";
import { connect } from "react-redux";
const AddSmurf = () => {
  return (
    <div className="add-smurf-form">
      <Form>
        <h2>Add your Smurf to the Family</h2>
        <Field type="text" name="name" placeholder="Name" />
        <Field type="text" name="age" placeholder="Age" />
        <Field type="text" name="height" placeholder="Height" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

const FormikAddSmurf = withFormik({
  mapPropsToValues({ name, age, height }) {
    return {
      name: name || "",
      age: age || "",
      height: height || "",
    };
  },

  handleSubmit(values, { resetForm }) {
    axios.post("http://localhost:3333/smurfs", values).then(res => {
      getSmurf();
      resetForm();
    });
  },
});

const AddSmurfWithFormik = FormikAddSmurf(AddSmurf);

const mapStatetoProps = state => {
  return {
    smurfList: state.smurfList,
  };
};
export default connect(
  mapStatetoProps,
  { getSmurf },
)(AddSmurfWithFormik);
