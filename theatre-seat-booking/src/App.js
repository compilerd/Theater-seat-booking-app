import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import HomePage from "./components/HomePage";
import ShowDetailsPage from "./components/ShowDetailsPage";
import SeatAllocationPage from "./components/SeatAllocationPage";
import CheckoutPage from "./components/CheckoutPage";
import Timer from "./components/Timer";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={withRouter(HomePage)} />
            <Route path="/show/:id" component={withRouter(ShowDetailsPage)} />
            <Route
              path="/seat-allocation"
              component={withRouter(SeatAllocationPage)}
            />
            <Route path="/checkout" component={withRouter(CheckoutPage)} />
          </Switch>
          <Timer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
