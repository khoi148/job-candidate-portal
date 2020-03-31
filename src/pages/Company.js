import React from "react";
import { Link } from "react-router-dom";

export default function Company() {
  return (
    <div>
      <h1>Yo, this is the Company Page</h1>
      <Link to="/">Back to home page</Link>
    </div>
  );
}
