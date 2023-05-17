import React, { Fragment } from "react";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <Fragment>
      <div
        className="flex mt-10 max-md:flex max-md:flex-col-reverse max-md:mt-0"
        id="skills"
      >
        <div className="flex-1 p-5 max-md:p-0">
          <iframe
            src="https://embed.lottiefiles.com/animation/132994"
            className="h-full w-full"
            title="woman coding"
          ></iframe>
        </div>
        <div className="flex-1 p-10 text-justify max-md:text-center max-md:px-10 py-0">
          <h1 className="text-5xl text-black max-md:text-2xl pt-5">
            What I Do?
          </h1>
          <p className="mt-5 text-xl max-md:mt-2 max-md:text-base">
            Armed with a versatile tech stack comprising cutting-edge tools and
            frameworks, I bring your wildest ideas to life.
          </p>
          <div className="flex flex-wrap mb-5">
            <SkillsCard />
          </div>
          <div className="flex flex-col text-justify">
            <p className="text-justify text-xl mb-5 flex items-start max-md:text-base">
              <img
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/26a1.png"
                alt="bullet point thunder shape"
                className="mr-2 mt-2 h-6 inline"
              />
              Creating intuitive user interfaces that captivate and engage
            </p>
            <p className="text-justify text-xl mb-5 flex items-start max-md:text-base">
              <img
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/26a1.png"
                alt="bullet point thunder shape"
                className="mr-2 mt-2 h-6 inline"
              />{" "}
              Architecting scalable back-end systems that ensure optimal
              performance
            </p>
            <p className="text-justify text-xl mb-5 flex items-start max-md:text-base">
              <img
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/26a1.png"
                alt="bullet point thunder shape"
                className="mr-2 mt-2 h-6 inline"
              />{" "}
              Integrating cutting-edge technologies such as AI, machine
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
