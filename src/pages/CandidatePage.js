import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CandidateForm from "./CandidateForm";
import { Link } from "react-router-dom";

export default function CandidatePage(props) {
  const { id } = useParams();
  const [candidateData, setCandidateData] = useState(null);
  async function fetchData() {
    console.log("id", id);
    let data = await fetch(`http://localhost:3001/candidates/` + id);
    let response = await data.json();
    console.log(response);
    setCandidateData(response);
  }

  useEffect(() => {
    fetchData();
  }, [id]); //always use arrow functions

  if (candidateData === null) {
    return <div>No data Loaded</div>;
  }
  return (
    <div>
      <h1>
        Hi, this is the Candidate Page for{" "}
        {candidateData.first_name + " " + candidateData.last_name}
      </h1>
      <CandidateForm candidate={candidateData} />
      <Link to="/">Back to HomePage</Link>
    </div>
  );
}
