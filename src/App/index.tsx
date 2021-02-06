import React from "react";
import Appointments from "@pages/Appointments";
import Home from "@pages/Home";
import AddCustomer from "@pages/AddCustomer";
import AddAppointment from "@pages/AddAppointment";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App(): JSX.Element {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/appointments">
            <Appointments />
          </Route>
          <Route exact path="/add-customer">
            <AddCustomer />
          </Route>
          <Route exact path="/add-appointment">
            <AddAppointment />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
