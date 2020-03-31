import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Candidates from "./pages/Candidates.js";
import CandidatePage from "./pages/CandidatePage.js";
import Company from "./pages/Company.js";
import LoginPage from "./pages/LoginPage.js";
import LogoutPage from "./pages/LogoutPage.js";

export default function App() {
  const [user, setUser] = useState({ isAuthenticated: false });
  const myStorage = window.localStorage;
  let check;

  const ProtectedRoute = props => {
    console.log("protectedRoute Props", props);
    return props.user.isAuthenticated ? (
      <Route {...props} />
    ) : (
      <Redirect
        to={{
          pathname: "/",
          state: {
            from: props.location
          }
        }}
      />
    );
  };
  //order matters in a Router, Switch. It runs from top to bottom like a case statement
  console.log("isAuth value", user);

  return (
    <Switch>
      <Route
        exact
        path={["/", "/candidate"]}
        render={props => <Candidates {...props} user={user} />}
      />
      <Route
        exact
        path={["/login"]}
        render={props => <LoginPage {...props} user={user} setUser={setUser} />}
      />
      <Route
        exact
        path={["/logout"]}
        render={props => (
          <LogoutPage {...props} user={user} setUser={setUser} />
        )}
      />
      <Route
        exact
        path={["/company"]}
        render={props => <Company {...props} />}
      />

      <ProtectedRoute
        exact
        path={["/candidate/:id"]}
        user={user}
        render={props => <CandidatePage {...props} user={user} />}
      />
      <Route path="*" component={FourOhFourPage} />
    </Switch>
  );
}

const FourOhFourPage = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
    </div>
  );
};

// const Guest = props => {
//   console.log("Guest props", props);
//   return (
//     <div>
//       <h1>This is a Guest Page</h1>
//     </div>
//   );
// };

// function User(props) {
//   console.log("User props", props);
//   return (
//     <div>
//       <h1>This is a User Page</h1>
//     </div>
//   );
// }
//will render if user is authenticated, else we redirect client to Guest page
// const ProtectedRoute = props => {
//   console.log("ProtectedRoute props", props);
//   return props.authenticated ? (
//     <Route {...props} render={() => <User {...props} />} />
//   ) : (
//     <Redirect to="/guest" />
//   );
// };
