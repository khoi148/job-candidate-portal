import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  isAuthenticated: false,
  userEmail: "",
  data: {},
  profile: {},
};
function setUser(state = initialState, action) {
  console.log("state", initialState);
  console.log("action", action);
  console.log("payload", action.payload);
  let adjust = { ...state };

  switch (action.type) {
    case "LOGIN":
      //if(adminEmail) do this , else
      adjust.isAuthenticated = true;
      adjust.userEmail = "";
      return adjust;
    case "LOGOUT":
      adjust.isAuthenticated = false;
      adjust.userEmail = "";
      return adjust;
    case "SETDATA":
      //payload is the json response here
      adjust.data = action.payload;
      return adjust;
    case "SETPROFILEDATA":
      //payload is the json here
      adjust.profile = action.payload;
      return adjust;
    default:
      return state;
  }
}
const store = createStore(
  setUser, // Hooks up Redux Devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
