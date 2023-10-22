import React from "react";
import Header from "./Components/Header";
import Background from "./Components/Background";
import Why from "./Components/Why";
import Featured from "./Components/Featured";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <Why />
      <Featured />
    </div>
  );
}

export default App;
