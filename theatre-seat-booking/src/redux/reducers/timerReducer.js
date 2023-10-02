const initialState = {
  isBookingExpired: false,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BOOKING_EXPIRED":
      return {
        ...state,
        isBookingExpired: action.payload,
      };
    default:
      return state;
  }
};

export default timerReducer;
