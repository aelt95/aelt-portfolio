import { useState } from "react";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";

import "./Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setIsActive("");
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar-wraper">
      <div className="navbar">
        <Link to={"/"} className="logo-wraper" onClick={clickHandler}>
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <ul className="nav-list">
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`${
                    isActive === link.title ? "text-active" : "text-inactive"
                  } a-link`}
                  onClick={() => setIsActive(link.title)}
                >
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
        {/* <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={!toggle ? menu : close}
            alt="menu bar"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          {toggle ? (
            <div className="flex p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl">
              <ul className="list-none flex items-start flex-col gap-4">
                {navLinks.map((link) => {
                  return (
                    <li
                      key={link.id}
                      className={`${
                        isActive === link.title
                          ? "text-white"
                          : "text-secondary"
                      } font-poppins font-heavy text-[16px] font-semibold`}
                      onClick={() => setIsActive(link.title)}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
