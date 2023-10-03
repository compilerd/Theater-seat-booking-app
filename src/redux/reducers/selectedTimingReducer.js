import { SELECT_TIMING } from "../actions";

const selectedTimingReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_TIMING:
      return action.payload;
    default:
      return state;
  }
};

export default selectedTimingReducer;
