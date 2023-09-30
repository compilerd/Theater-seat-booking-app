import { SELECT_SEATS } from "./index";

export const selectSeats = (seats) => {
  return {
    type: SELECT_SEATS,
    payload: seats,
  };
};
