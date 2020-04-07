import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function LogoutPage(props) {
  //let authState = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();
  console.log("login props", props);

  return (
    <div className="d-flex flex-column align-items-center text-center">
      <h1 className="border border-primary rounded-pill px-5 py-3 mb-3">
        Log Out Page
      </h1>
      <Link
        className="my-3"
        onClick={() => {
          alert("you've logged out");
          props.myStorage.setItem("auth", false);
          dispatch({ type: "LOGOUT" });
        }}
        to="/"
      >
        <button className=" btn btn-primary text-light">Log Out</button>
      </Link>
      <Link to="/">Back to home page</Link>
    </div>
  );
}
