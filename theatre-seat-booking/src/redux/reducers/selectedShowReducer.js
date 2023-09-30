import { SELECT_SHOW } from "../actions";

const selectedShowReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_SHOW:
      return action.payload;
    default:
      return state;
  }
};

export default selectedShowReducer;
