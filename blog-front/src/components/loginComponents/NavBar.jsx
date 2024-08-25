import React from "react";
import { FiUserX } from "react-icons/fi";
import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../../staticfiles/logincssfiles/nav.css";
import DropDown from "../DropDown";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const loggedOut = ()=>{
    
  }
  const {isLoggedIn} = useSelector((state)=>state.auth)
  React.useEffect(()=>{
   
    if (isLoggedIn){
      setUserAuthenticated(true)
    }
  },[isLoggedIn])
  // const checkUserAuthenticated = useReducer(() => {
  //     setUserAuthenticated(!userAuthenticated);
  // })

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-100 z-1  ">
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
               <DropDown className="z-15"/>
            ) : (
              <Link to='/Login' className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">
                <FiUserX className="text-black inline-block align-middle h-8 w-8" />
              </Link>
            )}
           
            
          </div>
        </div>
      </nav>
     
     
    </>
  );
};
