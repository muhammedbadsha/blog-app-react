import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import elenthkadavu_pic from "../assets/profile_pic/elenthkadavu_pic.jpg";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import {logout} from "../redux/features/users/auth/userAuthSlice"
import { useNavigate } from "react-router-dom";
// import { logoutUser } from "../redux/features/users/auth/userAuthSlice";
// import ProfileView from "../pages/ProfileView";
const BaseUrlLogout = 'http://127.0.0.1:8000/api/auth/logout'
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


const DropDown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutUser = async()=>{
    const refreshToken = localStorage.getItem('refresh_token')
    try{
        const response = await axios.post(BaseUrlLogout,
          {refresh_token:refreshToken},
          {headers: {
            'Content-Type':'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          },
        }
        );
        if (response.status === 205){
          console.log('Logged out successfully');
          dispatch(logout())
          navigate('/Login')
        }

        
    }
    catch (error){
        console.log("Error loggin out: ",error);
    };
};

  const LoggedOut = async()=>{
    try{
      // logoutUser()
      logoutUser();
      
    }
    catch(error){
      console.log(error);
      
    }
  }
  return (
    <div className="">
      <Menu as="div" className="relative ml-3">
        <div className="z-400">
          <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            <img
              className="object-cover border-1 border-gray-400 rounded-full h-10 w-10 cursor-pinter"
              src={elenthkadavu_pic}
              alt=""
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <Link
                to={'/Profile'}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Your Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Settings
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                  onClick={LoggedOut}
                >
                  Sign out
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default DropDown;
