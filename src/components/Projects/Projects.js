import React, { Fragment } from "react";
import ProjectCard from "./ProjectCard";
import BudgetBud from "../../assets/budgetBud.png";
import Appetizer from "../../assets/Appetizer.png";
import UserModule from "../../assets/UserModule.png";
import InstaClone from "../../assets/insta_clone.png";
import FrontendTask from "../../assets/Frontend-Task.png";
import SpaceX from "../../assets/SpaceX.png";
const data = [
  {
    name: "BudgetBud",
    timeline: "May 2023 - Current",
    about: ["lots of stuff"],
    stacks: ["React", "Nodejs", "MongoDB", "Express"],
    src: BudgetBud,
  },
  {
    name: "BudgetBud",
    timeline: "May 2023 - Current",
    about: ["lots of stuff"],
    stacks: ["React", "Nodejs", "MongoDB", "Express"],
    src: InstaClone,
  },
  {
    name: "BudgetBud",
    timeline: "May 2023 - Current",
    about: ["lots of stuff"],
    stacks: ["React", "Nodejs", "MongoDB", "Express"],
    src: UserModule,
  },
  {
    name: "BudgetBud",
    timeline: "May 2023 - Current",
    about: ["lots of stuff"],
    stacks: ["React", "Nodejs", "MongoDB", "Express"],
    src: Appetizer,
  },
  {
    name: "BudgetBud",
    timeline: "May 2023 - Current",
    about: ["lots of stuff"],
    stacks: ["React", "Nodejs", "MongoDB", "Express"],
    src: FrontendTask,
  },
  {
    name: "BudgetBud",
    timeline: "May 2023 - Current",
    about: ["lots of stuff"],
    stacks: ["React", "Nodejs", "MongoDB", "Express"],
    src: SpaceX,
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
              src={p.src}
            />
          ))}
        </div>
        <a
          href="https://github.com/shiv-anya"
          className="text-xl uppercase bg-purple-800 text-white py-3 px-5 rounded-lg hover:bg-white hover:text-purple-800 hover:border-2 hover:border-purple-800 mt-5"
        >
          See more
        </a>
      </div>
    </Fragment>
  );
};

export default Projects;
