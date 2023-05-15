import React, { Fragment } from "react";
import Banner from "./components/Intro/Banner";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Fragment>
      <Banner />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </Fragment>
  );
}

export default App;
