import React, { Fragment } from "react";

const ContactCard = () => {
  return (
    <Fragment>
      <div className="flex max-md:justify-center items-end">
        <a
          href={"https://github.com/shiv-anya"}
          className="mr-5  bg-black p-2 w-12 rounded-full flex justify-center items-center hover:bg-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github text-2xl text-white"></i>
          <span></span>
        </a>

        <a
          href={"https://www.linkedin.com/in/shiv-anya/"}
          className="mr-5  bg-blue-600 p-2 w-12 rounded-full flex justify-center items-center hover:bg-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in text-2xl text-white"></i>
          <span></span>
        </a>

        <a
          href={`mailto:sg90883@gmail.com`}
          className="mr-5  bg-red-500 p-2 w-12 rounded-full flex justify-center items-center hover:bg-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope text-2xl text-white"></i>
          <span></span>
        </a>
      </div>
    </Fragment>
  );
};

export default ContactCard;
