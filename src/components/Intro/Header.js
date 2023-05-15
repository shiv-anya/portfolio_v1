import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <header>
        <nav className="flex p-10 justify-between text-2xl">
          <div>
            <span>SG</span>
          </div>
          <div>
            <ul className="flex">
              <li>
                <a className="pr-10" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="pr-10" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="pr-10" href="#experience">
                  Work Experiences
                </a>
              </li>
              <li>
                <a className="pr-10" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="pr-10" href="#contact">
                  Contact
                </a>
              </li>
              <li></li>
            </ul>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
