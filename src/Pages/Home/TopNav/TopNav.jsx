import React, { useState } from "react";
import { Link } from "react-router-dom";
import Feed from "../Feed/Feed";
import People from "../People/People";
import Trending from "../Trending/Trending";

const TopNav = () => {
  const [openTab, setOpenTab] = useState("feed");
  return (
    <div>
      <div className="lg:w-10/12 w-11/12 mx-auto mt-4">
        <div className="flex flex-col items-center justify-center">
          <ul className="w-8/12 flex justify-around fixed lg:top-4 top-24 space-x-2 z-50">
            <li className="w-full text-center shadow-md">
              <Link
                to="/"
                onClick={() => setOpenTab("feed")}
                className={` ${
                  openTab === "feed" ? "bg-purple-600 text-white" : ""
                } inline-block px-4 py-4 text-xl text-gray-600 bg-white rounded shadow w-full`}
              >
                Feed
              </Link>
            </li>
            <li className="w-full text-center shadow-md">
              <Link
                to="#"
                onClick={() => setOpenTab("people")}
                className={` ${
                  openTab === "people" ? "bg-purple-600 text-white" : ""
                } inline-block px-4 py-4 text-xl text-gray-600 bg-white rounded shadow w-full`}
              >
                People
              </Link>
            </li>
            <li className="w-full text-center shadow-md">
              <Link
                to="#"
                onClick={() => setOpenTab("trending")}
                className={` ${
                  openTab === "trending" ? "bg-purple-600 text-white" : ""
                } inline-block px-4 py-4 text-xl text-gray-600 bg-white rounded shadow w-full`}
              >
                Trending
              </Link>
            </li>
          </ul>
          <div className="p-3 w-full mt-[75px]">
            <div className={openTab === "feed" ? "block" : "hidden"}>
              <Feed />
            </div>
            <div className={openTab === "people" ? "block" : "hidden"}>
              <People />
            </div>
            <div className={openTab === "trending" ? "block" : "hidden"}>
              <Trending />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
