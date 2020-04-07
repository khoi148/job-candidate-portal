import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CandidateForm from "./CandidateForm";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

export default function CandidatePage() {
  return (
    <div className="row">
      <CandidateForm />
    </div>
  );
}
