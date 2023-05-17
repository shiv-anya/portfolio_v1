import React, { Fragment } from "react";
import Header from "./Header";
import classes from "./Banner.module.css";
import ContactCard from "./ContactsCard";

const Banner = () => {
  return (
    <Fragment>
      <div id="about">
        <Header />
        <div
          id="about"
          className="flex pt-20 max-md:flex-col max-md:items-center"
        >
          <div className="flex-1 pl-10 py-10 max-md:pl-0 max-md:py-0">
            <h1 className="text-5xl pb-10 text-black max-md:text-3xl max-md:font-bold  max-md:py-5 max-md:text-center max-md:px-5">
              Hi, all. I'm Shivangi{" "}
              <span className={classes.wave}>
                <img
                  src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
                  alt="hand waving"
                  className="h-14 w-14 ml-3 z-auto max-md:hidden"
                />
              </span>
            </h1>
            <p className="text-2xl max-md:text-center max-md:text-base  max-md:px-5">
              Buckle up and get ready to embark on a wild coding adventure!🚀As
              a full-stack developer, I bring together the power of front-end
              wizardry and back-end sorcery to craft digital masterpieces.
            </p>
            <div className="mt-5 mb-10 max-md:mb-5">
              <ContactCard />
            </div>
            <div className="max-md:flex justify-center">
              <a
                href="#contact"
                className="text-xl uppercase bg-purple-800 text-white py-3 px-5 mr-10 rounded-lg hover:bg-white hover:text-purple-800 hover:border-2 hover:border-purple-800 max-md:py-1 max-md:px-3 max-md:text-base max-md:rounded-sm max-md:mr-2"
              >
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/1IvtaMCSGwfMGp_C2flOMn6V4pYcPTynt/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="text-xl uppercase bg-purple-800 text-white py-3 px-5 rounded-lg hover:bg-white hover:text-purple-800 hover:border-2 hover:border-purple-800 max-md:py-1 max-md:px-3 max-md:text-base max-md:rounded-sm"
              >
                See My Resume
              </a>
            </div>
          </div>
          <div className="flex-1">
            <iframe
              src="https://embed.lottiefiles.com/animation/61030"
              className="w-full h-full p-10 pr-20 max-md:p-0 max-md:pt-10"
              title="woman designing web page"
            ></iframe>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
