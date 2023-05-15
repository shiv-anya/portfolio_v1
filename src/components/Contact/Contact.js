import React, { Fragment } from "react";

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
          <p className="text-2xl mb-5">Delhi, India</p>
          <p className="text-2xl mb-5">Open for opportunities: YES</p>
          <div>contacts</div>
        </div>
        <div>img</div>
      </div>
      <div className="h-36 flex justify-center items-center text-xl">
        <p>Made with love by SG</p>
        <a href="#about">Up</a>
      </div>
    </Fragment>
  );
};

export default Contact;
