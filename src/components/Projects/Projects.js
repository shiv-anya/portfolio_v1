import React, { Fragment } from "react";
import ProjectCard from "./ProjectCard";
import StreamPlay from "../../assets/streamplay.jpg";
import InstaClone from "../../assets/insta_clone.png";
import YinYang from "../../assets/yinyang.png";
import Livestock from "../../assets/livestock.png";
import Ticko from "../../assets/tickitoff.png";
import AngryGrid from "../../assets/angrygrid.png";
const data = [
  {
    name: "Stream Play",
    timeline: "Dec 2024 - Current",
    about:
      "A chat application with real-time messaging, typing indicators, and group chats, built using React and GetStream.io SDK.",
    stacks: ["React", "TailwindCSS", "Redux", "GetStream SDK"],
    src: StreamPlay,
    live: "",
    github: "https://github.com/shiv-anya/stream-play",
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
    name: "Yin and Yang (Meditation Website)",
    timeline: "Jan 2024 - Jan 2024",
    about:
      "A yin yang website focusing on an interactive website with theme inspired by nature.",
    stacks: ["Next.js", "React.js", "Tailwind CSS"],
    src: YinYang,
    live: "https://yin-yang-meditation.vercel.app/",
    github: "https://github.com/shiv-anya/yin_yang_meditation_website",
  },
  {
    name: "Livestock",
    timeline: "Nov 2024 - Current",
    about:
      "Stock broadcasting live stock prices and a search feature to track your stocks.",
    stacks: ["React.js", "TailwindCSS", "Rechart.js", "Socket"],
    src: Livestock,
    live: "https://livestock-client.vercel.app/",
    github: "https://github.com/shiv-anya/livestock",
  },
  {
    name: "Tick It Off",
    timeline: "Oct 2024 - Current",
    about: "A to-do app with filtering, sticky notes and a dynamic calendar.",
    stacks: ["React", "Redux"],
    src: Ticko,
    live: "https://tick-it-off.vercel.app/",
    github: "https://github.com/shiv-anya/to-do",
  },
  {
    name: "Angry Grid Clash",
    timeline: "Oct 2024 - Current",
    about: "An interactive game of tic-tac-toe based on angry bird theme.",
    stacks: ["React"],
    src: AngryGrid,
    live: "https://angry-grid-clash.vercel.app/",
    github: "https://github.com/shiv-anya/angry-grid-clash",
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
