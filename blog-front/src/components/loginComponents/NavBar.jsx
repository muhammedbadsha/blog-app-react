import React from "react";
import { FiUserX } from "react-icons/fi";
import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../../staticfiles/logincssfiles/nav.css";
import DropDown from "../DropDown";

export const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  // const checkUserAuthenticated = useReducer(() => {
  //     setUserAuthenticated(!userAuthenticated);
  // })

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto min-w-screen-sm max-w-screen-xl p-4">
          <div
            className={`font-medium ${!isExpanded ? "" : "sm:hidden md:flex"}`}
          >
            <Link to="/" className="flex items-center">
              <div className="text-bold sm:text-base md:text-lg lg:text-4xl ">
                <b>B</b>log<b>H</b>ub
              </div>
            </Link>
          </div>
          <div className="flex flex-row">
            {/* <input type="search" className={` w-full sm:w-auto`} /> */}
            <div className="">
              <div className="relative">
                <input
                  className={`w-0 ${
                    isExpanded
                      ? "sm:w-46 md:w-64 lg:w-64 xl:max-w-xl"
                      : "sm:w-46 md:w-64 lg:w-64 xl:max-w-2xl"
                  } transition-all duration-300 ease-in-out border border-gray-300 rounded-full p-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary`}
                  type="text"
                  placeholder="Search..."
                />
                <button
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 cursor-pointer"
                  onClick={toggleExpand}
                >
                  <RiSearch2Line />
                </button>
              </div>
              {/* <RiSearch2Line className="inline-block align-middle " /> */}
            </div>
          </div>
          <div>
            {userAuthenticated ? (
               <DropDown />
            ) : (
              <Link className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">
                <FiUserX className="text-black inline-block align-middle h-8 w-8" />
              </Link>
            )}
           
            
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700 w-full sticky top-0">
        <div className="max-w-screen-xl px-4 py-3 mx-auto flex justify-between">
          <div className="scrollbarCate flex items-center overflow-x-auto scroll-pl-6">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <Link
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-gray-900 dark:text-white hover:underline">
                  Company
                </Link>
              </li>
              <li>
                <Link className="text-gray-900 dark:text-white hover:underline">
                  Team
                </Link>
              </li>
              <li>
                <Link className="text-gray-900 dark:text-white hover:underline">
                  Features
                </Link>
              </li>
            </ul>
          </div>
          { userAuthenticated &&
          <div className="">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
              />
            </svg>
          </div>
          }
        </div>
      </nav>
     
    </>
  );
};
