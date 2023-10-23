import React from "react";
import { useContext } from "react";
import "./Home.css";
import Header from "../Components/Header";
import Background from "../Components/Background";
import Why from "../Components/Why";
import Featured from "../Components/Featured";
import Listings from "../Components/Listings";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const user = useContext(AuthContext);
  return (
    <div className="Home">
      <Header />
      <Background />
      <Why />
      <Featured />
      {user ? <Listings /> : null}
    </div>
  );
}

export default Home;
