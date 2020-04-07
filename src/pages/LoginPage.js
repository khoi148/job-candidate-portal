import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function LoginPage(props) {
  let authState = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();
  console.log("login props", props);

  return (
    <div className="d-flex flex-column align-items-center text-center">
      <h1 className="border border-primary rounded-pill px-5 py-3 mb-3">
        Login Page
      </h1>

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <br></br>
      <Link
        className="my-3"
        onClick={() => {
          alert("you've logged in");
          props.myStorage.setItem("auth", true);
          dispatch({ type: "LOGIN", payload: "" }); //payload will be username
        }}
        to="/"
      >
        <button className=" btn btn-primary text-light">Log in</button>
      </Link>
      <Link to="/">Back to home page</Link>
    </div>
  );
}
