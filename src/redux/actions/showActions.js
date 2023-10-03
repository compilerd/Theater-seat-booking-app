import { SELECT_SHOW } from "./index";

export const selectShow = (show) => {
  return {
    type: SELECT_SHOW,
    payload: show,
  };
};
