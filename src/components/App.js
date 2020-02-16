import React from "react";
import "../style/App.css";
import Navigation from "./Navigation";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
