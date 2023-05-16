import React, { Fragment } from "react";
import ContactCard from "../Intro/ContactsCard";

const Contact = () => {
  return (
    <Fragment>
      <div className="flex pl-10" id="contact">
        <div>
          <h2 className="text-5xl mt-10 mb-10">Reach Out to Me!</h2>
          <p className="text-2xl mb-5">
            Talk about open source contribution or for an opportunity. My inbox
            is open for all.
          </p>
          <p className="text-2xl mb-5">
            <i class="fa-regular fa-location-dot"></i>Delhi, India
          </p>
          <p className="text-2xl mb-5">Open for opportunities: YES</p>
          <div className="mt-10">
            <ContactCard />
          </div>
        </div>
        <div></div>
      </div>
      <div className="h-36 flex justify-center items-center text-xl">
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
          className="fixed bottom-10 right-10 bg-purple-800 rounded-lg p-2 flex justify-center items-center"
        >
          <i className="fas fa-hand-point-up text-white text-5xl"></i>
        </a>
      </div>
    </Fragment>
  );
};

export default Contact;
