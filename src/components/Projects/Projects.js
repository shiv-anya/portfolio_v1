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
    about:
      "BudgetBud is expense tracker with basic CRUD operations. And representation of monthly expenditure and yearly expenditure by charts",
    stacks: ["React", "Nodejs", "MongoDB", "Express", "Chart.js"],
    src: BudgetBud,
    live: "https://budgetbud23.netlify.app/",
    github: "https://github.com/shiv-anya/BudgetBud",
  },
  {
    name: "Insta Clone",
    timeline: "Sept 2021 - Current",
    about:
      "Insta clone app that gives you same visual experience. It can create posts. And show newsfeed. Authentication like signup and login available.",
    stacks: ["React", "Firebase"],
    src: InstaClone,
    live: "https://insta-clone21.netlify.app/",
    github: "https://github.com/shiv-anya/insta-clone",
  },
  {
    name: "User Management Module",
    timeline: "Sept 2022 - Current",
    about:
      "User Management Module. To manage your employees data at one place. Having two modes Admin and User. Includes all CRUD ops with authentication using email verification.",
    stacks: ["Vuejs", "Nodejs", "MongoDB", "Express", "OAuth", "JWT"],
    src: UserModule,
    live: "https://user-module22.netlify.app/",
    github: "https://github.com/shiv-anya/user_module",
  },
  {
    name: "Appetizer",
    timeline: "May 2022 - Current",
    about:
      "Restaurant app. Which is created keeping responsiveness, UI experience and theme in mind.",
    stacks: ["HTML", "CSS"],
    src: Appetizer,
    live: "https://appetizer-res.netlify.app/",
    github: "https://github.com/shiv-anya/restaurant",
  },
  {
    name: "Covid Cases Tracker",
    timeline: "May 2023 - Current",
    about:
      "It keep track of covid cases and it's representation countrywise and comparing deaths, total cases and recovered cases by line graph.",
    stacks: ["React", "Chart.js", "React Leaflet"],
    src: FrontendTask,
    live: "https://frontend-task23.netlify.app/",
    github: "https://github.com/shiv-anya/Frontend-task",
  },
  {
    name: "SpaceX Capsules Record",
    timeline: "April 2023 - Current",
    about:
      "Here you can know about all spaceX capsules and their details if you a hardcore fan. Filter records on basis of name, status and id.",
    stacks: ["React"],
    src: SpaceX,
    live: "https://spacex23.netlify.app/",
    github: "https://github.com/shiv-anya/ShivangiGupta_Frontend-Developer",
  },
];
const Projects = () => {
  return (
    <Fragment>
      <div
        className="mb-10 flex flex-col items-center max-md:mb-5"
        id="projects"
      >
        <h1 className="m-10 text-5xl text-black max-md:m-0 my-5 max-md:text-2xl">
          Projects
        </h1>
        <div className="flex flex-wrap justify-evenly">
          {data.map((p, index) => (
            <ProjectCard
              key={index}
              name={p.name}
              timeline={p.timeline}
              about={p.about}
              stacks={p.stacks}
              src={p.src}
              live={p.live}
              github={p.github}
            />
          ))}
        </div>
        <a
          href="https://github.com/shiv-anya"
          target="_blank"
          rel="noreferrer"
          className="text-xl uppercase bg-purple-800 text-white py-3 px-5 rounded-lg hover:bg-white hover:text-purple-800 hover:border-2 hover:border-purple-800 mt-5 max-md:py-1 max-md:px-3 max-md:text-base max-md:rounded-sm max-md:mr-2"
        >
          See more
        </a>
      </div>
    </Fragment>
  );
};

export default Projects;
