import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import { connect } from "react-redux";
import { selectSeats } from "../redux/actions/seatActions";
import { Link } from "react-router-dom";
import "./SeatAllocationPage.css";

const SeatAllocationPage = ({ selectedSeats, selectSeats }) => {
  const [localSelectedSeats, setLocalSelectedSeats] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);

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

  //for mocking unavailable seats
  useEffect(() => {
    selectSeats([4, 7, 9, 15]);
  }, []);

  // call when seats are selected/unselected for total bill amount display
  useEffect(() => {
    setTotalMoney(localSelectedSeats.length * 200); //Assuming each seat to be 200 rupees
  }, [localSelectedSeats.length]);

  const isBooked = (index) => selectedSeats.some((item) => item === index);

  return (
    <div className="seat-container">
      <Typography variant="h4">Seat Allocation</Typography>
      <div className="seat-grid">
        {[...Array(30)].map((_, index) => (
          <Button
            key={index}
            variant={
              localSelectedSeats.includes(index + 1) ? "contained" : "outlined"
            }
            disabled={isBooked(index + 1)}
            onClick={() => handleSeatClick(index + 1)}
            style={{ margin: "5px" }}
            className="seat-grid-button"
          >
            {index + 1}
          </Button>
        ))}
      </div>
      {localSelectedSeats?.length ? (
        <div>
          <Typography variant="h5">Selected Seats:</Typography>
          <ul>
            {localSelectedSeats.map((seat) => (
              <li key={seat}>Seat {seat}</li>
            ))}
          </ul>
          <Typography variant="h5">Total Cost:</Typography>
          <ul>{totalMoney}</ul>

          <Link to="/checkout">
            <Button
              variant="contained"
              color="primary"
              onClick={handleContinue}
            >
              Continue
            </Button>
          </Link>
        </div>
      ) : null}
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
