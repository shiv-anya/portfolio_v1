import React, { Fragment } from "react";
import Banner from "./components/Intro/Banner";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Fragment>
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </Fragment>
  );
}

export default App;
