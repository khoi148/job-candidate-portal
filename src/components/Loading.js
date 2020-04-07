import React from "react";
import logo from "assets/logo.svg";
import "App.css";

export default function Loading() {
  return (
    <div className="App" style={{ width: "100%" }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Loading </p>
      </header>
    </div>
  );
}
