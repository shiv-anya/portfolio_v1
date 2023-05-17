import React, { Fragment } from "react";
import ContactCard from "../Intro/ContactsCard";

const Contact = () => {
  return (
    <Fragment>
      <div className="flex px-10 text-black max-md:px-5" id="contact">
        <div className="max-md:flex flex-col justify-center">
          <h2 className="text-5xl mt-10 mb-10 max-md:text-2xl max-md:my-5 max-md:text-center">
            Reach Out to Me!
          </h2>
          <p className="text-2xl mb-5 max-md:text-base max-md:mb-2 max-md:text-center">
            Talk about open source contribution or for an opportunity. My inbox
            is open for all.
          </p>
          <p className="text-2xl mb-5 max-md:text-base max-md:mb-2 max-md:text-center">
            <i className="fa-regular fa-location-dot"></i>Delhi, India
          </p>
          <p className="text-2xl mb-5 max-md:text-base max-md:mb-2 max-md:text-center">
            Open for opportunities: YES
          </p>
          <div className="mt-10 max-md:mt-5">
            <ContactCard />
          </div>
        </div>
        <div></div>
      </div>
      <div className="h-36 flex justify-center items-center text-xl max-md:text-base max-md:h-14">
        <p className="flex justify-center items-center">
          Made with{" "}
          <img
            className="h-5 w-5 mx-1"
            alt="heart"
            src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/2764.png"
          />{" "}
          by SG
        </p>
        <a
          href="#about"
          className="fixed bottom-10 right-10 bg-purple-800 rounded-lg p-2 flex justify-center items-center max-md:bottom-2 right-2"
        >
          <i className="fas fa-hand-point-up text-white text-5xl max-md:text-2xl"></i>
        </a>
      </div>
    </Fragment>
  );
};

export default Contact;
