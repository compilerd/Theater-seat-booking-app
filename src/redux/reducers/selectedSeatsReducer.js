import { SELECT_SEATS } from "../actions";

const selectedSeatsReducer = (state = [], action) => {
  switch (action.type) {
    case SELECT_SEATS:
      return action.payload;
    default:
      return state;
  }
};

export default selectedSeatsReducer;
