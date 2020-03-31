import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Candidates(props) {
  const [data, setData] = useState(null);

  async function fetchData() {
    let url = `http://localhost:3001/candidates`; //name of json file in root
    let data = await fetch(url);
    let response = data.json();

    response.then(result => {
      setData(result);
      console.log("call to server", result);
    });
  }
  useEffect(() => {
    fetchData();
  }, []);

  let auth = props.user.isAuthenticated;
  console.log("from cd.js", auth);
  console.log("hmm ", props.user.isAuthenticated);
  return (
    <div>
      <div className="d-flex flex-column align-items-center text-center mb-5">
        <h1 className="border border-primary rounded-pill px-5 py-3 mb-3">
          Homepage
        </h1>
        {console.log("render", props.user.isAuthenticated)}
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
                  <Link to={`/candidate/${item.id}`}>Edit Profile</Link>
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
