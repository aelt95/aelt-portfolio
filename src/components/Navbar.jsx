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
        <div className="responsive-nav">
          <img
            src={!toggle ? menu : close}
            alt="menu bar"
            className="responsive-nav-img"
            onClick={() => setToggle(!toggle)}
          />
          {toggle ? (
            <div className="nav-open-wraper">
              <ul className="nav-open-ul">
                {navLinks.map((link) => {
                  return (
                    <li key={link.id}>
                      <a
                        href={`#${link.id}`}
                        className={`${
                          isActive === link.title
                            ? "text-active"
                            : "text-inactive"
                        } a-link`}
                        onClick={() => setIsActive(link.title)}
                      >
                        {link.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
