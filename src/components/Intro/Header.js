import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <header className="fixed w-full bg-white font-monte z-10">
        <nav className="flex p-10 justify-between text-2xl">
          <div className="font-cedar italic">
            <span>{"</"}</span>
            <span>Sg</span>
            <span>{">"}</span>
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
