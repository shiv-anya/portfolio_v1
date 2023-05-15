import React, { Fragment } from "react";
import ProjectCard from "./ProjectCard";

const data = [
  {
    name: "BudgetBud",
    timeline: "May 2023 - Current",
    about: ["lots of stuff"],
    stacks: ["React", "Nodejs", "MongoDB", "Express"],
  },
  {
    name: "BudgetBud",
    timeline: "May 2023 - Current",
    about: ["lots of stuff"],
    stacks: ["React", "Nodejs", "MongoDB", "Express"],
  },
  {
    name: "BudgetBud",
    timeline: "May 2023 - Current",
    about: ["lots of stuff"],
    stacks: ["React", "Nodejs", "MongoDB", "Express"],
  },
  {
    name: "BudgetBud",
    timeline: "May 2023 - Current",
    about: ["lots of stuff"],
    stacks: ["React", "Nodejs", "MongoDB", "Express"],
  },
  {
    name: "BudgetBud",
    timeline: "May 2023 - Current",
    about: ["lots of stuff"],
    stacks: ["React", "Nodejs", "MongoDB", "Express"],
  },
  {
    name: "BudgetBud",
    timeline: "May 2023 - Current",
    about: ["lots of stuff"],
    stacks: ["React", "Nodejs", "MongoDB", "Express"],
  },
];
const Projects = () => {
  return (
    <Fragment>
      <div className="my-10 flex flex-col items-center" id="projects">
        <h1 className="m-10 text-5xl">Projects</h1>
        <div className="flex flex-wrap justify-evenly">
          {data.map((p) => (
            <ProjectCard
              name={p.name}
              timeline={p.timeline}
              about={p.about}
              stacks={p.stacks}
            />
          ))}
        </div>
        <a className="text-xl uppercase bg-purple-800 text-white py-3 px-5 rounded-lg hover:bg-white hover:text-purple-800 hover:border-2 hover:border-purple-800 mt-5">
          See more
        </a>
      </div>
    </Fragment>
  );
};

export default Projects;
