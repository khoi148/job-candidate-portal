import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Link, Redirect } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import CandidatePage from "./pages/CandidatePage.js";
import Company from "./pages/Company.js";

export default function App() {
  const [user, setUser] = useState({ authenticated: true });

  return (
    <div>
      <Route
        exact
        path={["/", "/candidate"]}
        render={props => <Homepage {...props} />}
      />
      <Route
        exact
        path={"/candidate/:id"}
        render={props => <CandidatePage {...props} />}
      />

      {/* <ProtectedRoute
        //this is not a imported component. You create Protected Route as a component below
        path="/user"
        authenticated={true}
        render={props => <User {...props} />}
      /> */}
    </div>
  );
}

const Guest = props => {
  console.log("Guest props", props);
  return (
    <div>
      <h1>This is a Guest Page</h1>
    </div>
  );
};

function User(props) {
  console.log("User props", props);
  return (
    <div>
      <h1>This is a User Page</h1>
    </div>
  );
}
//will render if user is authenticated, else we redirect client to Guest page
const ProtectedRoute = props => {
  console.log("ProtectedRoute props", props);
  return props.authenticated ? (
    <Route {...props} render={() => <User {...props} />} />
  ) : (
    <Redirect to="/guest" />
  );
};

// <Router>
/*<Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/candidate/:id" exact component={CandidatePage} />
        <ProtectedRoute
          user={user}
          path="/candidates/:id"
          exact
          component={ProtectedRoute}
        />

        <Route path="/company" exact component={Company} />
      </Switch> }
      );*/
// </Router>
