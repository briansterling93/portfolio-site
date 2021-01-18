import React from "react";
import Home from "./components/Home";
import Skills from "./components/Skills";
import { createGlobalStyle } from "styled-components";

const Universal = createGlobalStyle`
 body {
    padding: 0rem;
    box-sizing: none;
    margin: 0;
    font-family: "Segoe UI", Arial, sans-serif;
 }
`;

function App() {
  return (
    <div className="App">
      <Universal />
      <Home />
      <Skills />
    </div>
  );
}

export default App;
