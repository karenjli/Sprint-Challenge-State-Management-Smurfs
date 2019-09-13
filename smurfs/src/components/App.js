import React, { useEffect } from "react";
import "./App.css";

import { getSmurf } from "../actions";
import Smurf from "../components/smurf";
import { connect } from "react-redux";

// class App extends Component {
//   render() {}
// }

const App = ({ getSmurf, smurfList, isFetching, error }) => {
  useEffect(() => {
    getSmurf();
  }, [getSmurf]);
  return (
    <div className="App">
      {smurfList.map(item => (
        <Smurf name={item.name} age={item.age} height={item.height} />
      ))}
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
  { getSmurf },
)(App);
