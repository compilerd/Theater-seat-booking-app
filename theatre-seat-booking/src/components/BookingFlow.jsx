// BookingFlow.js

import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ShowDetailsPage from "./ShowDetailsPage";
import SeatAllocationPage from "./SeatAllocationPage";
import CheckoutPage from "./CheckoutPage";
import BookingTimer from "./BookingTimer";

const BookingFlow = () => {
  return (
    <>
      <BookingTimer />
      <Switch>
        <Route exact path="/show/:id" component={ShowDetailsPage} />
        <Route exact path="/seat-allocation" component={SeatAllocationPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default BookingFlow;
