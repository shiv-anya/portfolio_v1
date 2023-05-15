import React, { Fragment } from "react";

const Experience = () => {
  return (
    <Fragment>
      <div className="my-10 mt-10" id="experience">
        <h1 className="text-5xl text-center mb-20">Experiences</h1>
        <div className="flex justify-evenly">
          <div className="shadow-2xl h-96 w-96 rounded-lg">
            <div className="h-36 flex items-center justify-center bg-purple-800 rounded-t-lg">
              <p>Fynd Academy</p>
              <div className="h-24 text-6xl absolute mt-40">F</div>
            </div>
            <div className="flex flex-col items-center p-9">
              <h2 className="text-2xl">Graduate Engineer Trainee</h2>
              <p className="text-xl">Timeline</p>
              <p className="text-justify text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                laudantium.
              </p>
            </div>
          </div>
          <div className="shadow-2xl h-96 w-96 rounded-lg">
            <div className="h-36 flex items-center justify-center bg-purple-800 rounded-t-lg">
              <p>Fynd Academy</p>
              <div className="h-24 text-6xl absolute mt-40">F</div>
            </div>
            <div className="flex flex-col items-center p-9">
              <h2 className="text-xl">Graduate Engineer Trainee</h2>
              <p className="text-xl">Timeline</p>
              <p className="text-justify text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                laudantium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Experience;
