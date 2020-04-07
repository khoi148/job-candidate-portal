import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CandidateForm from "./CandidateForm";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function CandidatePage() {
  const { id } = useParams();
  //const [candidateData, setCandidateData] = useState(null);
  let candidateData = useSelector((state) => state.profile);
  let dispatch = useDispatch();

  return (
    <div>
      <div className="row">
        <CandidateForm />
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
