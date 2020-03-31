import React from "react";
import { Link } from "react-router-dom";
export default function LoginPage(props) {
  console.log("login props", props);
  const myStorage = window.localStorage;

  return (
    <div className="d-flex flex-column align-items-center text-center">
      <h1 className="border border-primary rounded-pill px-5 py-3 mb-3">
        Login Page
      </h1>
      <Link
        className="my-3"
        onClick={() => {
          alert("you've logged in");
          props.myStorage.setItem("auth", true);
          props.setUser({ isAuthenticated: true });
        }}
        to="/"
      >
        <button className=" btn btn-primary text-light">Log in</button>
      </Link>
      <Link to="/">Back to home page</Link>
    </div>
  );
}
