import React from "react";
import { Typography, Button } from "@mui/material";
import { connect } from "react-redux";

const CheckoutPage = ({ selectedShow, selectedSeats }) => {
  const showDetails = selectedShow || {
    name: "Movie 1",
    creator: "Director Name",
    timings: ["10:00 AM", "2:00 PM", "6:00 PM"],
  };
  const totalPrice = selectedSeats.length * 10; // Assuming each seat costs $10

  return (
    <div>
      <Typography variant="h4">Checkout</Typography>
      <Typography variant="body1">Name: {showDetails.name}</Typography>
      <Typography variant="body1">Director: {showDetails.creator}</Typography>
      <Typography variant="body1">Timing: {showDetails.timings[0]}</Typography>
      <Typography variant="h5">Selected Seats:</Typography>
      <ul>
        {selectedSeats.map((seat) => (
          <li key={seat}>Seat {seat}</li>
        ))}
      </ul>
      <Typography variant="h5">Total Price: ${totalPrice}</Typography>
      <Button variant="contained" color="primary">
        Pay
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedShow: state.selectedShow,
    selectedSeats: state.selectedSeats,
  };
};

export default connect(mapStateToProps)(CheckoutPage);
