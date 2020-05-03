import React from "react";
import "./App.css";
import CovidMain from "./components/CovidMain";
import Header from "./components/Header";
// import CovidWorld from "./components/CovidWorld";

function App() {
  return (
    <div className="container">
      <Header />
      {/* <CovidWorld /> */}
      <CovidMain />
    </div>
  );
}

export default App;
