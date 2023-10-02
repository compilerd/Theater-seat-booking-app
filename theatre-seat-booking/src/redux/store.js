import { createStore, combineReducers } from "redux";
import selectedShowReducer from "./reducers/selectedShowReducer";
import selectedTimingReducer from "./reducers/selectedTimingReducer";
import selectedSeatsReducer from "./reducers/selectedSeatsReducer";
import showsReducer from "./reducers/showsReducer";
import timerReducer from "./reducers/timerReducer";

const rootReducer = combineReducers({
  selectedShow: selectedShowReducer,
  selectedTiming: selectedTimingReducer,
  selectedSeats: selectedSeatsReducer,
  shows: showsReducer,
  timer: timerReducer,
});

const store = createStore(rootReducer);

export default store;
