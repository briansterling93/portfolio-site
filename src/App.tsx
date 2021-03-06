import React from "react";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { createGlobalStyle } from "styled-components";
const Universal = createGlobalStyle`
 body {
  background-color: white;
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
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
