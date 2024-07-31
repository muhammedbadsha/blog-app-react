import React from "react";
import { ImSmile } from "react-icons/im";
import { GoPlus } from "react-icons/go";
import { IoSend } from "react-icons/io5";
const ChatInput = () => {
  return (
    <div className="flex bg-gray-700 items-center">
      <div className="w-13 px-2 flex justify-center items-center">
        <div className="w-full h-full flex justify-center ">
          <ImSmile className="flex px-r-2 items-center w-9 h-full" />
        </div>
        <div className="w-1/2 bg-gray-700 text-lg">
          <GoPlus className="w-12 h-12" />
        </div>
      </div>
      <div className="grow mx-2">
        <input className="w-full h-10 px-r-3 bg-gray-500 ring-none outline-none border-none text-gray-900 text-sm rounded-lg focus:ring-none focus:border-none dark:bg-gray-500 " type="text" />
      </div>
      <div className="px-2 flex items-center">
        <div className=""><IoSend className="w-10 h-10"/></div>
      </div>
    </div>
  );
};

export default ChatInput;
