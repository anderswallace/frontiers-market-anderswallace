import React from "react";
import Header from "../Components/Header";
import Background from "../Components/Background";
import Why from "../Components/Why";
import Featured from "../Components/Featured";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Background />
      <Why />
      <Featured />
    </div>
  );
}

export default Home;
