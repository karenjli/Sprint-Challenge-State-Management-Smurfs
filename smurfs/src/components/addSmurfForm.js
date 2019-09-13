import React, { useState } from "react";
import { addSmurf } from "../actions";
import { connect } from "react-redux";

const AddSmurfForm = props => {
  //   const [smurf, setSmurf] = useState({ name: "", age: null, height: "" });
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [height, setHeight] = useState();

  //   const smurfAdd = event => {
  //     setSmurf({ ...smurf, [event.target.name]: event.target.value });
  //     console.log(smurf);
  //   };

  const nameHandler = event => {
    setName(event.target.value);
  };
  const heightHandler = event => {
    setHeight(event.target.value);
  };

  const ageHandler = event => {
    setAge(parseInt(event.target.value, 10));
  };

  const smurf = {
    name: name,
    age: age,
    height: height,
  };
  return (
    <div className="add-smurf-form">
      <h2>Add your Smurf to the Family</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={nameHandler}
      />
      <input type="number" name="age" placeholder="Age" onChange={ageHandler} />
      <input
        type="text"
        name="height"
        placeholder="Height"
        onChange={heightHandler}
      />
      <button onClick={() => props.addSmurf(smurf)}>Submit</button>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    smurfList: state.smurfList,
  };
};

export default connect(
  mapStatetoProps,
  { addSmurf },
)(AddSmurfForm);
