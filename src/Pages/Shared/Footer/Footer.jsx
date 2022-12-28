import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <section>
      <footer className="p-4 border-t-2 border-gray-500">
        <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0 w-11/12 text-gray-700 ">
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8 ">
            <div className="flex items-center justify-center rounded-lg ">
              <Link
                to="/"
                className="lg:flex justify-center items-center gap-3 text-xl font-semibold p-1 rounded-xl hidden"
              >
                <img
                  src={logo}
                  className="md:w-12 md:h-12 h-8 w-8"
                  alt="logo"
                />

                <span>Valence</span>
              </Link>
            </div>

            <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
              <li className="hover:underline duration-1000">
                <Link to="/">Terms of Use</Link>
              </li>
              <li className="hover:underline duration-1000">
                <Link to="/">Privacy</Link>
              </li>
            </ul>
          </div>

          <p>
            {" "}
            Copyright &copy; {new Date().getFullYear()} TechBook. All rights
            reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
