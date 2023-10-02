import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import HomePage from "./components/HomePage";

import BookingFlow from "./components/BookingFlow";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={BookingFlow} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
