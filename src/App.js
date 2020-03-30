import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import CreateCandidate from "./pages/CreateCandidate.js";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/createcandidate">
          <CreateCandidate />
        </Route>
        <Route path="">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}
