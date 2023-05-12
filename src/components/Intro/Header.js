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
                <a className="pr-10">About</a>
              </li>
              <li>
                <a className="pr-10">Skills</a>
              </li>
              <li>
                <a className="pr-10">Experience</a>
              </li>
              <li>
                <a className="pr-10">Projects</a>
              </li>
              <li>
                <a className="pr-10">Contact</a>
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
