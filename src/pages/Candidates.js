import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Candidates(props) {
  const [data, setData] = useState(null);

  async function fetchData() {
    //use this other url if you wanna use the local server. Use command
    //json-server -p3001 --watch candidates.json
    //`http://localhost:3001/candidates`;
    let url = `https://job-portal-clone-khoi.herokuapp.com/candidates`;
    let config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    let data = await fetch(url, config);
    let response = await data.json();
    console.log("call to heroku", response);
    setData(response);
  }
  useEffect(() => {
    fetchData();
  }, []);

  let auth = props.user.isAuthenticated;
  return (
    <div>
      <div className="d-flex flex-column align-items-center text-center mb-5">
        <h1 className="border border-primary rounded-pill px-5 py-3 mb-3">
          Homepage
        </h1>
        {auth === true && <h2 className="text-success">Logged in</h2>}
        {auth === false && <h2 className="">Not logged in yet</h2>}
        <Link
          className="d-flex my-2"
          to="/company"
          style={{ width: "200px", textDecoration: "none" }}
        >
          <button className="flex-grow-1 btn btn-primary">
            Go to Company Page
          </button>
        </Link>
        <Link
          className="d-flex my-2"
          to={auth === false ? "/login" : "/logout"}
          style={{ width: "200px", textDecoration: "none" }}
        >
          <button className="flex-grow-1 btn btn-primary">
            {auth === false ? "Login" : "Logout"}
          </button>
        </Link>
      </div>

      <div className="row">
        {data !== null &&
          data.map(item => {
            return (
              <Card className="col-md-3">
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={item.photo_url}
                    alt="profile picture"
                  />
                  <Card.Title className="text-primary">
                    {item.first_name} {item.last_name}{" "}
                    {item.gender.toLowerCase() === "male" ? "(M)" : "(F)"}
                  </Card.Title>
                  <Card.Subtitle className="mb-2">{item.company}</Card.Subtitle>
                  <Card.Subtitle className="mb-2">
                    Role: {item.job_title}
                  </Card.Subtitle>
                  <Card.Text className="text-muted">
                    {item.country}, {item.city}
                  </Card.Text>
                  {auth === true ? (
                    <Link to={`/candidate/${item.id}`}>Edit Profile</Link>
                  ) : (
                    <Card.Text className="text-muted">
                      Log in to edit profiles...
                    </Card.Text>
                  )}
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </div>
  );
}

/* each object in the array from response, after the promise resolves
{
      "first_name": "Sierra",
      "last_name": "CoderSchool",
      "email": "",
      "gender": "Male",
      "company": "Skipstorm",
      "job_title": "Instructor",
      "city": "H.C.M.C.",
      "country": "Vietnam",
      "photo_url": "https://robohash.org/idvoluptatibusdolorem.png?size=500x500&set=set1",
      "id": 203
      */
