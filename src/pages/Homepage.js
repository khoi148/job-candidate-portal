import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
export default function Homepage() {
  const [data, setData] = useState(null);

  async function fetchData() {
    let url = `http://localhost:3001/candidates`;
    let data = await fetch(url);
    let response = data.json();

    response.then(result => {
      setData(result);
      console.log(result);
    });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Hi, this is the homepage</h1>
      <h2>Let's fetch some data</h2>
      <div className="d-flex flex-wrap bg-secondary">
        {data !== null &&
          data.map(item => {
            return (
              <Card style={{ width: "18rem" }}>
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
  */
