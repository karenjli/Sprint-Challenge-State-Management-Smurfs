import { FETCHING_SMURF_START, FETCHING_SMURF_SUCCESS } from "../actions";

const initialState = {
  smurfList: [
    {
      name: "",
      age: "",
      height: "",
    },
  ],
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF_START:
      return { ...state, isFetching: true, error: "" };
    case FETCHING_SMURF_SUCCESS:
      return { ...state, isFetching: false, smurfList: action.payload };
    default:
      return state;
  }
};
