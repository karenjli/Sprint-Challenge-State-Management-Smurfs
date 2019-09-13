import React, { useEffect } from "react";
import "./App.css";

import { getSmurf, addSmurf } from "../actions";
import Smurf from "../components/smurf";
//import AddSmurfWithFormik from "./addSmurf";
import { connect } from "react-redux";
import AddSmurfForm from "./addSmurfForm";

// class App extends Component {
//   render() {}
// }

const App = ({ getSmurf, addSmurf, smurfList, isFetching, error }) => {
  useEffect(() => {
    getSmurf();
  }, [getSmurf]);

  return (
    <div className="App">
      <div className="add-form">
        <AddSmurfForm />
      </div>
      <div className="smurf-list">
        {smurfList.map(item => (
          <Smurf
            key={item.id}
            name={item.name}
            age={item.age}
            height={item.height}
          />
        ))}
      </div>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    smurfList: state.smurfList,
    isFetching: state.isFetching,
    error: state.error,
  };
};
export default connect(
  mapStatetoProps,
  { getSmurf, addSmurf },
)(App);
