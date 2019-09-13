import React from "react";

const Smurf = props => {
  return (
    <div className="smurf">
      <h2>Name: {props.name}</h2>
      <h4>Age: {props.age}</h4>
      <h4>Height: {props.height}</h4>
    </div>
  );
};

export default Smurf;
