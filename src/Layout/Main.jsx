import React, { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import LeftNav from "../Pages/Shared/LeftNav/LeftNav";
import logo from "../assets/logo.png";
import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiMessageRounded } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { BsFillBookmarkFill, BsThreeDots } from "react-icons/bs";
import Footer from "../Pages/Shared/Footer/Footer";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";

const Main = () => {
  const [drawer, setDrawer] = useState(false);
  const [bg, setBg] = useState(null);
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const signOut = () => {
    logOut().then().catch();
  };

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
              <li className="mb-10 flex justify-start items-center cursor-pointer">
                <img src={logo} alt="" className="w-14" />{" "}
                <span className="font-semibold mr-2 text-xl">Valence</span>
              </li>

              <li
                className={`${
                  bg === "media" ? "bg-white text-dark" : ""
                }mb-2 hover:bg-white cursor-pointer rounded-lg w-full text-gray-600 hover:text-black`}
                onClick={() => setBg("media")}
              >
                <NavLink
                  to="/media"
                  className="w-full flex  px-4 py-3 items-center"
                >
                  <AiFillHome className="mr-5 text-2xl" /> Media
                </NavLink>
              </li>
              <li
                className={`${
                  bg === "explore" ? "bg-white text-dark" : ""
                }mb-2 hover:bg-white cursor-pointer rounded-lg w-full text-gray-600 hover:text-black`}
                onClick={() => setBg("explore")}
              >
                <NavLink
                  to="/explore"
                  className="w-full flex px-4 py-3 items-center"
                >
                  <MdExplore className="mr-5 text-2xl" /> Explore
                </NavLink>
              </li>
              <li
                className={`${
                  bg === "profile" ? "bg-white text-dark" : ""
                }mb-2 hover:bg-white cursor-pointer rounded-lg w-full text-gray-600 hover:text-black`}
                onClick={() => setBg("profile")}
              >
                <NavLink
                  to="/profile"
                  className="w-full px-4 py-3 flex items-center"
                >
                  <CgProfile className="mr-5 text-2xl" /> Profile
                </NavLink>
              </li>
              <li
                className={`${
                  bg === "message" ? "bg-white text-dark" : ""
                }mb-2 hover:bg-white cursor-pointer rounded-lg w-full text-gray-600 hover:text-black`}
                onClick={() => setBg("message")}
              >
                <NavLink
                  to="/message"
                  className="w-full px-4 py-3 flex items-center"
                >
                  <BiMessageRounded className="mr-5 text-2xl" /> Messages
                </NavLink>
              </li>
              <li
                className={`${
                  bg === "notifications" ? "bg-white text-dark" : ""
                }mb-2 hover:bg-white cursor-pointer rounded-lg w-full text-gray-600 hover:text-black`}
                onClick={() => setBg("notifications")}
              >
                <NavLink
                  to="/notification"
                  className="w-full flex px-4 py-3 items-center"
                >
                  <IoIosNotifications className="mr-5 text-2xl" /> Notifications
                </NavLink>
              </li>
              <li
                className={`${
                  bg === "bookmarks" ? "bg-white text-dark" : ""
                }mb-2 hover:bg-white cursor-pointer rounded-lg w-full text-gray-600 hover:text-black`}
                onClick={() => setBg("bookmarks")}
              >
                <NavLink
                  to="/bookmarks"
                  className="w-full  px-4 py-3 flex items-center"
                >
                  <BsFillBookmarkFill className="mr-5 text-2xl" /> Bookmarks
                </NavLink>
              </li>
            </div>

            {/* This is Dropdown */}
            <div>
              {user?.uid ? (
                <>
                  <div className="dropdown dropdown-top w-full cursor-pointer">
                    <label tabIndex={0} className="m-1">
                      <div className="flex justify-between items-center w-full cursor-pointer">
                        <div className="flex justify-center items-center">
                          <div className="avatar online">
                            <div className="w-14 rounded-full">
                              <img src={user?.photoURL} alt="" />
                            </div>
                          </div>
                          <div className="ml-3">
                            <p className="font-semibold text-xl">
                              {user?.displayName}
                            </p>
                          </div>
                        </div>
                        <span className="hover:bg-white p-4 rounded-full transition-colors duration-500 ">
                          <BsThreeDots />
                        </span>
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <span onClick={signOut}>Log Out</span>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <label htmlFor="login">
                    <li className="px-4 py-3 bg-blue-800 text-white font-semibold text-center rounded-lg cursor-pointer">
                      Sign In
                    </li>
                  </label>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
