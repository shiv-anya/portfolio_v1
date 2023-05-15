import React, { Fragment } from "react";
import Header from "./Header";

const Banner = () => {
  return (
    <Fragment>
      <div id="about">
        <Header />
        <div id="about" className="flex">
          <div className="flex-1 p-10">
            <h1 className="text-6xl pb-10">
              Hi, all. I'm Shivangi <span class="wave">👋</span>
            </h1>
            <p className="text-justify text-2xl">
              Buckle up and get ready to embark on a wild coding adventure!🚀As
              a full-stack developer, I bring together the power of front-end
              wizardry and back-end sorcery to craft digital masterpieces.
            </p>
            <div className="mb-10">contacts</div>
            <div>
              <a className="text-xl uppercase bg-purple-800 text-white py-3 px-5 mr-10 rounded-lg hover:bg-white hover:text-purple-800 hover:border-2 hover:border-purple-800">
                Contact Me
              </a>
              <a className="text-xl uppercase bg-purple-800 text-white py-3 px-5 rounded-lg hover:bg-white hover:text-purple-800 hover:border-2 hover:border-purple-800">
                See My Resume
              </a>
            </div>
          </div>
          <div className="flex-1">svg</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
