import React, { Fragment, useState } from "react";

const BurgerMenu = () => {
  const [isHamburger, setIsHamburger] = useState(true);
  const toggleHandler = () => {
    setIsHamburger(!isHamburger);
  };
  return (
    <Fragment>
      <header className="fixed w-full bg-white font-monte z-10 text-black md:hidden">
        <nav className="flex flex-col p-5 text-2xl">
          <div className="flex justify-between items-center">
            <div className="font-cedar italic">
              <span>{"</"}</span>
              <span>Sg</span>
              <span>{">"}</span>
            </div>
            <div onClick={toggleHandler}>
              {isHamburger && <i className="fas fa-bars text-3xl"></i>}
              {!isHamburger && <i className="fas fa-times"></i>}
            </div>
          </div>
          {!isHamburger && (
            <div>
              <ul className="flex flex-col">
                <li className="pt-5" onClick={toggleHandler}>
                  <a className="pr-10" href="#about">
                    About
                  </a>
                </li>
                <li className="pt-2" onClick={toggleHandler}>
                  <a className="pr-10" href="#skills">
                    Skills
                  </a>
                </li>
                <li className="pt-2" onClick={toggleHandler}>
                  <a className="pr-10" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="pt-2" onClick={toggleHandler}>
                  <a className="pr-10" href="#contact">
                    Contact
                  </a>
                </li>
                <li></li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </Fragment>
  );
};

export default BurgerMenu;
