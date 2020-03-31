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
      <h1 className="row border border-warning rounded-pill px-5 py-3 mb-3">
        Candidate Page :{" "}
        {candidateData.first_name + " " + candidateData.last_name}
      </h1>
      <div className="row">
        <CandidateForm candidate={candidateData} />
      </div>
      <div className="text-center mt-5">
        <Link to="/">
          <button className="btn btn-transparent border-dark">
            {" "}
            back to home{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}
