import axios from "axios";
export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE";
export const FETCHING_SMURF_ADD = "FETCHING_SMURF_UPDATE";

export const getSmurf = () => dispatch => {
  dispatch({ type: FETCHING_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCHING_SMURF_FAILURE,
        payload: err,
      });
    });
};
export const addSmurf = smurf => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      console.log(smurf);
      dispatch({ type: FETCHING_SMURF_ADD, payload: res.data });
    })
    .catch(err => console.log(err));
};

// export const getSmurf = () => {
//   axios
//     .get("http://localhost:3333/smurfs")
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err));
// };

// getSmurf();
