import React, { Fragment } from "react";

const ProjectCard = (props) => {
  return (
    <Fragment>
      <div className="shadow-2xl h-auto w-80 rounded-lg my-5">
        <img
          src={props.src}
          alt="project"
          className="h-44 w-full rounded-t-lg"
        />
        <div className="flex flex-col items-center p-5 justify-between">
          <h2 className="text-2xl py-2 text-center text-black max-md:text-xl py-0">
            {props.name}
          </h2>
          <p className="text-sm py-2">({props.timeline})</p>
          <p className="text-center text-xl text-black max-md:text-base">
            {props.about}
          </p>
          <div className="py-2 text-black max-md:text-base">
            <ul className="flex flex-wrap justify-center">
              {props.stacks.map((s, index) => (
                <li
                  className="mr-3 shadow-inner p-1 rounded-sm mt-2"
                  key={index}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="my-5">
            <a
              href={props.live}
              className="text-base uppercase bg-purple-800 text-white py-1 px-3 rounded-lg hover:bg-white hover:text-purple-800 hover:border-2 hover:border-purple-800 mr-5"
            >
              Live
            </a>
            <a
              href={props.github}
              className="text-base uppercase bg-purple-800 text-white py-1 px-3 rounded-lg hover:bg-white hover:text-purple-800 hover:border-2 hover:border-purple-800"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectCard;
