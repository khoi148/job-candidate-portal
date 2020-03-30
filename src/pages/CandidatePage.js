import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function CandidatePage(props) {
  const { id } = useParams();
  const [candidateData, setCandidateData] = useState(null);

  const fetchData = async () => {
    console.log("id", id);
    try {
      let data = await fetch(`http://localhost:3001/candidates/` + id);
      let response = await data.json();
      console.log(response);
      setCandidateData(response);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => fetchData(), []); //always use arrow functions

  if (candidateData === null) {
    return <div>No data Loaded</div>;
  }
  return (
    <div>
      <h1>Hi, this is the Candidate Page </h1>
      <h1>
        {candidateData.first_name} {candidateData.last_name}
      </h1>
      <a href="/">Back to HomePage</a>
    </div>
  );
}
