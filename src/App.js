import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Candidates from "./pages/Candidates.js";
import CandidatePage from "./pages/CandidatePage.js";
import Company from "./pages/Company.js";
import LoginPage from "./pages/LoginPage.js";
import LogoutPage from "./pages/LogoutPage.js";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const [user, setUser] = useState({ isAuthenticated: false });
  const myStorage = window.localStorage;
  let authState = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();

  const ProtectedRoute = (props) => {
    console.log("protectedRoute Props", props);
    return authState ? (
      <Route {...props} />
    ) : (
      <Redirect
        to={{
          pathname: "/",
          state: {
            from: props.location,
          },
        }}
      />
    );
  };

  function fetchLocalStorage() {
    let check = myStorage.getItem("auth");
    console.log("fetchLocalStorage", check, typeof check); //localStorage always a string
    //TODO: also get another myStorage item, for username. Set another MS item called 'username'
    if (check === "true") dispatch({ type: "LOGIN" });
    else dispatch({ type: "LOGOUT" });
  }

  useEffect(() => {
    fetchLocalStorage();
  }, []);
  //order matters in a Router, Switch. It runs from top to bottom like a case statement
  console.log("isAuth value", user);

  return (
    <Switch>
      <Route
        exact
        path={["/", "/candidate"]}
        render={(props) => <Candidates {...props} />}
      />
      <Route
        exact
        path={["/login"]}
        render={(props) => (
          <LoginPage
            {...props}
            user={user}
            setUser={setUser}
            myStorage={myStorage}
          />
        )}
      />
      <Route
        exact
        path={["/logout"]}
        render={(props) => <LogoutPage {...props} myStorage={myStorage} />}
      />
      <Route
        exact
        path={["/company"]}
        render={(props) => <Company {...props} />}
      />

      <ProtectedRoute
        exact
        path={["/candidate/:id"]}
        user={user}
        render={(props) => <CandidatePage {...props} />}
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
