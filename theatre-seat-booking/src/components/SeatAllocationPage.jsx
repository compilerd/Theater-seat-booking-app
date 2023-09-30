import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import { connect } from "react-redux";
import { selectSeats } from "../redux/actions/seatActions";

const SeatAllocationPage = ({ selectedSeats, selectSeats }) => {
  const [localSelectedSeats, setLocalSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (localSelectedSeats.includes(seat)) {
      setLocalSelectedSeats(localSelectedSeats.filter((s) => s !== seat));
    } else {
      setLocalSelectedSeats([...localSelectedSeats, seat]);
    }
  };

  const handleContinue = () => {
    selectSeats(localSelectedSeats);
  };

  return (
    <div>
      <Typography variant="h4">Seat Allocation</Typography>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {[...Array(10)].map((_, index) => (
          <Button
            key={index}
            variant={
              localSelectedSeats.includes(index + 1) ? "contained" : "outlined"
            }
            onClick={() => handleSeatClick(index + 1)}
            style={{ margin: "5px" }}
          >
            {index + 1}
          </Button>
        ))}
      </div>
      <div>
        <Typography variant="h5">Selected Seats:</Typography>
        <ul>
          {localSelectedSeats.map((seat) => (
            <li key={seat}>Seat {seat}</li>
          ))}
        </ul>
        <Button variant="contained" color="primary" onClick={handleContinue}>
          Continue
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedSeats: state.selectedSeats,
  };
};

const mapDispatchToProps = {
  selectSeats,
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatAllocationPage);
