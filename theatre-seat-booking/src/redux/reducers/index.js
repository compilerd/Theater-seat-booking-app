import { combineReducers } from "redux";
import selectedShowReducer from "./selectedShowReducer";
import selectedTimingReducer from "./selectedTimingReducer";
import selectedSeatsReducer from "./selectedSeatsReducer";
import timerReducer from "./timerReducer";

const rootReducer = combineReducers({
  selectedShow: selectedShowReducer,
  selectedTiming: selectedTimingReducer,
  selectedSeats: selectedSeatsReducer,
  timer : timerReducer
});

export default rootReducer;
