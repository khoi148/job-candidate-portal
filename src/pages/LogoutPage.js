import React from "react";
import { Link } from "react-router-dom";
export default function LogoutPage(props) {
  console.log("login props", props);
  const myStorage = window.localStorage;

  return (
    <div className="d-flex flex-column align-items-center text-center">
      <h1 className="border border-primary rounded-pill px-5 py-3 mb-3">
        Log Out Page
      </h1>
      <button
        className="btn btn-primary my-3"
        onClick={() => {
          alert("you've logged out");
          props.setUser({ isAuthenticated: false });
        }}
      >
        <Link className="text-light" to="/">
          Log Out
        </Link>
      </button>
      <Link to="/">Back to home page</Link>
    </div>
  );
}
