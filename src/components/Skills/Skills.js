import React, { Fragment } from "react";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <Fragment>
      <div className="flex mt-10" id="skills">
        <div className="flex-1 p-5">
          <iframe
            src="https://embed.lottiefiles.com/animation/132994"
            className="h-full w-full"
          ></iframe>
        </div>
        <div className="flex-1 p-10 text-justify">
          <h1 className="text-5xl">What I Do?</h1>
          <p className="my-10 text-2xl">
            Armed with a versatile tech stack comprising cutting-edge tools and
            frameworks, I bring your wildest ideas to life.
          </p>
          <div className="flex flex-wrap mb-10">
            <SkillsCard />
          </div>
          <div className="flex flex-col text-justify">
            <p className="text-justify text-2xl mb-5">
              ⚡ Creating intuitive user interfaces that captivate and engage
            </p>
            <p className="text-justify text-2xl mb-5">
              ⚡ Architecting scalable back-end systems that ensure optimal
              performance
            </p>
            <p className="text-justify text-2xl">
              ⚡ Integrating cutting-edge technologies such as AI, machine
              learning, and IoT into web applications, pushing boundaries and
              introducing new possibilities
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;
