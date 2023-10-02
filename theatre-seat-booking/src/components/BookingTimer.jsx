import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBookingExpired } from "../redux/actions/timerActions";
import { useHistory } from "react-router-dom";

const BookingTimer = () => {
  const [seconds, setSeconds] = useState(120); // 5 minutes
  const history = useHistory();

  const dispatch = useDispatch();
  const isBookingExpired = useSelector((state) => state.timer.isBookingExpired);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        dispatch(setBookingExpired(true));
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      dispatch(setBookingExpired(false));
      clearInterval(timer);
    };
  }, [dispatch, seconds]);

  if (isBookingExpired) {
    window.alert("Time out");
    history.push(`/`);
  }

  return (
    <div>
      Time Remaining: {Math.floor(seconds / 60)}:{seconds % 60}
    </div>
  );
};

export default BookingTimer;
