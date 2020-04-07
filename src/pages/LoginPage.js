import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function LoginPage(props) {
  let authState = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  console.log("login props", props);

  function submitFunction() {
    if (loginData.email !== "" && loginData.email !== undefined) {
      props.myStorage.setItem("auth", true);
      props.myStorage.setItem("user-email", loginData.email);
      alert("you've logged in");
      setValidated(true);

      dispatch({ type: "LOGIN", payload: loginData.email });
    } else {
      alert("Please enter in an email");
    }
  }

  if (authState === true) return <Redirect to="/" />;
  else
    return (
      <div className="d-flex flex-column align-items-center text-center">
        <h1 className="border border-primary rounded-pill px-5 py-3 mb-3">
          Login Page
        </h1>

        <Form noValidate validated={validated} onSubmit={submitFunction}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
            <Form.Text className="text-muted">
              i.e. youremail@mail.com
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            <Form.Text className="text-muted">
              currently passwords are not needed for logins
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>

        <Link className="mt-3" to="/">
          Back to home page
        </Link>
      </div>
    );
}
