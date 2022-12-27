import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import LeftNav from "../Pages/Shared/LeftNav/LeftNav";
import logo from "../assets/logo.png";
import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiMessageRounded } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { BsFillBookmarkFill } from "react-icons/bs";

const Main = () => {
  const [drawer, setDrawer] = useState(false);
  return (
    <div>
      <LeftNav setDrawer={setDrawer}></LeftNav>
      <div className="drawer h-screen drawer-mobile">
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle"
          checked={drawer}
        />
        <div className="drawer-content md:px-0">
          <Outlet></Outlet>
        </div>

        {/* <div className={drawer ? "drawer-side" : ""}> */}
        <div className="drawer-side">
          <label htmlFor="drawer" className="drawer-overlay"></label>
          <ul className="p-4 w-80 bg-base-100 text-base-content relative text-lg flex flex-col justify-between">
            <div>
              <p
                className="absolute top-0 right-2 px-2 bg-[#ffbd59] block lg:hidden cursor-pointer rounded-full"
                onClick={() => setDrawer(false)}
              >
                ✕
              </p>
              <li className="mb-10 flex justify-center items-center cursor-pointer">
                <img src={logo} alt="" className="w-14" />{" "}
                <span className="font-semibold mr-2 text-xl">Valence</span>
              </li>
              <li className="mb-2 flex items-center bg-white cursor-pointer px-4 py-3 rounded-lg w-full text-black">
                <AiFillHome className="mr-5 text-2xl" /> Media
              </li>
              <li className="mb-2 flex items-center hover:bg-white cursor-pointer px-4 py-3 rounded-lg w-full text-gray-600 hover:text-black">
                <MdExplore className="mr-5 text-2xl" /> Explore
              </li>
              <li className="mb-2 flex items-center hover:bg-white cursor-pointer px-4 py-3 rounded-lg w-full text-gray-600 hover:text-black">
                <CgProfile className="mr-5 text-2xl" /> Profile
              </li>
              <li className="mb-2 flex items-center hover:bg-white cursor-pointer px-4 py-3 rounded-lg w-full text-gray-600 hover:text-black">
                <BiMessageRounded className="mr-5 text-2xl" /> Messages
              </li>
              <li className="mb-2 flex items-center hover:bg-white cursor-pointer px-4 py-3 rounded-lg w-full text-gray-600 hover:text-black">
                <IoIosNotifications className="mr-5 text-2xl" /> Notifications
              </li>
              <li className="mb-2 flex items-center hover:bg-white cursor-pointer px-4 py-3 rounded-lg w-full text-gray-600 hover:text-black">
                <BsFillBookmarkFill className="mr-5 text-2xl" /> Bookmarks
              </li>
            </div>

            <div>
              <li className="px-4 py-3 bg-blue-800 text-white font-semibold text-center rounded-lg cursor-pointer">
                Sign In
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
