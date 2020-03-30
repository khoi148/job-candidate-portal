import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import CreateCandidate from "./pages/CreateCandidate.js";
import Company from "./pages/Company.js";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/candidate" exact component={CreateCandidate} />
        <Route path="/company" exact component={Company} />
      </Switch>
    </Router>
  );
}
