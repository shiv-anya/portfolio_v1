import React, { Fragment } from "react";

const ProjectCard = (props) => {
  return (
    <Fragment>
      <div className="shadow-2xl h-96 w-80 rounded-lg my-5">
        <div className="h-44 flex items-center justify-center bg-purple-800 rounded-t-lg"></div>
        <div className="flex flex-col items-center p-9">
          <h2 className="text-xl">{props.name}</h2>
          <p className="text-xl">{props.timeline}</p>
          <p className="text-justify text-xl">
            <ul className="flex">
              {props.about.map((a) => (
                <li>{a}</li>
              ))}
            </ul>
          </p>
          <div>
            <ul className="flex">
              {props.stacks.map((s) => (
                <li>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectCard;
