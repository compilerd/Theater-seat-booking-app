import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const Timer = () => {
  const [seconds, setSeconds] = useState(300); // 5 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <Typography variant="h5">
      {seconds > 0
        ? `Time remaining: ${Math.floor(seconds / 60)}:${seconds % 60}`
        : "Time is up!"}
    </Typography>
  );
};

export default Timer;
