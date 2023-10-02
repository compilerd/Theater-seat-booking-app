import React from "react";
import { Typography, Button } from "@mui/material";
import { connect } from "react-redux";
import "./CheckoutPage.css";

const CheckoutPage = ({ selectedShow, selectedSeats, selectedTiming }) => {
  const showDetails = selectedShow;
  const totalPrice = selectedSeats.length * 200; // Assuming each seat costs 200 rupees

  return (
    <div className="Checkout-page-container">
      <Typography variant="h4" className="checkout-heading">
        Checkout
      </Typography>
      <div className="summary-section">
        <Typography variant="body1" className="show-details">
          Name: {showDetails?.name}
        </Typography>
        <Typography variant="body1" className="show-details">
          Director: {showDetails?.creator}
        </Typography>
        <Typography variant="body1" className="show-details">
          Timing: {selectedTiming}
        </Typography>
        <Typography variant="h5">Selected Seats:</Typography>
        <ul className="selected-seats-list">
          {selectedSeats.map((seat) => (
            <li key={seat}>Seat {seat}</li>
          ))}
        </ul>
        <Typography variant="h5" className="total-price">
          Total Price: {totalPrice} Rupees
        </Typography>
      </div>
      <Button variant="contained" color="primary" className="pay-button">
        Pay
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedShow: state.selectedShow,
    selectedSeats: state.selectedSeats,
    selectedTiming: state.selectedTiming,
  };
};

export default connect(mapStateToProps)(CheckoutPage);
