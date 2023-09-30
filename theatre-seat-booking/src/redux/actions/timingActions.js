import { SELECT_TIMING } from "./index";

export const selectTiming = (timing) => {
  return {
    type: SELECT_TIMING,
    payload: timing,
  };
};
