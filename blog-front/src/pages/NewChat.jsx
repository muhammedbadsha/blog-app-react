import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import ChatInput from "../components/chat/ChatInput";

const NewChat = ({ openChat, closeChat, chat_is }) => {
  const handleCloseOpen = () => {
    console.log(chat_is);
    if (chat_is === true) {
      // setChat(true)

      closeChat();
    } else {
      openChat();
    }
  };
  return (
    <div className="flex-cols h-screen overflow-hidden w-full h-full px-2 py-2 sm:px-2 sm:py-2 md:px-12 md:py-9 lg:px-12 lg:py-12 xl:px-12 xl:py-12 2xl:px-36 2xl:py-36">
      <div className="w-full h-16 bg-gray-700 flex justify-between">
        <div className="text-gray-400	h-16 flex items-center pl-4 gap-3">
          <div className="rounded-full w-11 h-11 bg-zinc-500"></div>
          <h1>sdfafds</h1>
        </div>
        <div className="w-10 h-10 ">
          <div className="rounded-full bg-red-100 w-10 h-10 relative top-[-1em] right-[-1em]">
            <IoCloseSharp
              className="w-10 h-10 text-white-600	"
              onClick={handleCloseOpen}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full flex">
        <div className="left_side_bar bg-gray-100 h-5/6 w-1/3">
          <div className="w-full h-full">
            <div className="h-14 flex items-center">
              <h2 className="my-2 mb-2 ml-2 text-lg text-gray-600 ">Chats</h2>
            </div>
            <ul className="overflow-auto overflow-scroll scroll-smooth x_scrollbar_hide h-5/6">
              <li>
                <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
                    alt="username"
                  />
                  <div className="w-full pb-2">
                    <div className="flex justify-between">
                      <span className="block ml-2 font-semibold text-gray-600">
                        Jhon Don
                      </span>
                      <span className="block ml-2 text-sm text-gray-600">
                        25 minutes
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="block ml-2 text-sm text-gray-600">bye</span>
                      <span className="flex items-center">
                        <div className="bg-green-300 w-5 h-5 rounded-full flex items-center justify-center">
                          2
                        </div>
                      </span>
                    </div>
                  </div>
                </a>
                <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
                    alt="username"
                  />
                  <div className="w-full pb-2">
                    <div className="flex justify-between">
                      <span className="block ml-2 font-semibold text-gray-600">
                        Jhon Don
                      </span>
                      <span className="block ml-2 text-sm text-gray-600">
                        25 minutes
                      </span>
                    </div>
                    <span className="block ml-2 text-sm text-gray-600">bye</span>
                  </div>
                </a>
                <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
                    alt="username"
                  />
                  <div className="w-full pb-2">
                    <div className="flex justify-between">
                      <span className="block ml-2 font-semibold text-gray-600">
                        +2 mates
                      </span>
                      <span className="block ml-2 text-sm text-gray-600">
                        25 minutes
                      </span>
                    </div>
                    <span className="block ml-2 text-sm text-gray-600">bye</span>
                  </div>
                </a>
                <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
                    alt="username"
                  />
                  <div className="w-full pb-2">
                    <div className="flex justify-between">
                      <span className="block ml-2 font-semibold text-gray-600">
                        Jhon Don
                      </span>
                      <span className="block ml-2 text-sm text-gray-600">
                        25 minutes
                      </span>
                    </div>
                    <span className="block ml-2 text-sm text-gray-600">bye</span>
                  </div>
                </a>
                <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
                    alt="username"
                  />
                  <div className="w-full pb-2">
                    <div className="flex justify-between">
                      <span className="block ml-2 font-semibold text-gray-600">
                        Jhon Don
                      </span>
                      <span className="block ml-2 text-sm text-gray-600">
                        25 minutes
                      </span>
                    </div>
                    <span className="block ml-2 text-sm text-gray-600">bye</span>
                  </div>
                </a>
                <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
                    alt="username"
                  />
                  <div className="w-full pb-2">
                    <div className="flex justify-between">
                      <span className="block ml-2 font-semibold text-gray-600">
                        Jhon Don
                      </span>
                      <span className="block ml-2 text-sm text-gray-600">
                        25 minutes
                      </span>
                    </div>
                    <span className="block ml-2 text-sm text-gray-600">bye</span>
                  </div>
                </a>
                <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out bg-gray-100 border-b border-gray-300 cursor-pointer focus:outline-none">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src="https://cdn.pixabay.com/photo/2016/06/15/15/25/loudspeaker-1459128__340.png"
                    alt="username"
                  />
                  <div className="w-full pb-2">
                    <div className="flex justify-between">
                      <span className="block ml-2 font-semibold text-gray-600">
                        Same
                      </span>
                      <span className="block ml-2 text-sm text-gray-600">
                        50 minutes
                      </span>
                    </div>
                    <span className="block ml-2 text-sm text-gray-600">
                      Good night
                    </span>
                  </div>
                </a>
                <a className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
                    alt="username"
                  />
                  <div className="w-full pb-2">
                    <div className="flex justify-between">
                      <span className="block ml-2 font-semibold text-gray-600">
                        Emma
                      </span>
                      <span className="block ml-2 text-sm text-gray-600">
                        6 hour
                      </span>
                    </div>
                    <span className="block ml-2 text-sm text-gray-600">
                      Good Morning
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* right side bar */}
        <div className="right_side_bar bg-pink-100 w-3/4 h-5/6 border-l-2">
          <div className="relative flex items-center p-3 border-b border-gray-300 h-13">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
              alt="username"
            />
            <span className="block ml-2 font-bold text-gray-600">Emma</span>
            <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span>
          </div>
          <div className="chat_ground flex flex-col justify-end h-[22em] w-full bg-gray-100">
            <div className="overflow-auto overflow-scroll py-3 ">
              <ul className="space-y-2">
                    {/* badge of message */}
                    <div className="flex justify-center mb-2">
                  <div
                    className="rounded py-2 px-4 bg-[#DDECF2]"
                  >
                    <p className="text-sm uppercase">September 01, 2013</p>
                  </div>
                </div>
                <li className="flex justify-start">
                  <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                    <span className="block">
                      Created by Marit Oliemans, this chat UI takes advantage of
                      Tailwind CSS for its design. With responsiveness built in,
                      it ensures a seamless chatting experience across different
                      screen sizes.
                    </span>
                  </div>
                </li>
                <li className="flex justify-end">
                  <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                    <span className="block">how are you?</span>
                  </div>
                </li>
                <li className="flex justify-start">
                  <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                    <span className="block">
                      Created by Marit Oliemans, this chat UI takes advantage of
                      Tailwind CSS for its design. With responsiveness built in,
                      it ensures a seamless chatting experience across different
                      screen sizes.
                    </span>
                  </div>
                </li>
                <li className="flex justify-end">
                  <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                    <span className="block">how are you?</span>
                  </div>
                </li>
                <li className="flex justify-start">
                  <div className="flex items-center justify-center h-10 w-10 px-2 z-0 rounded-full bg-indigo-500 flex-shrink-0">
                    A
                  </div>
                  <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow z-1">
                    <span className="block">
                      Created by Marit Oliemans, this chat UI takes advantage of
                      Tailwind CSS for its design. With responsiveness built in,
                      it ensures a seamless chatting experience across different
                      screen sizes.
                    </span>
                  </div>
                </li>
                <li className="flex justify-end">
                  <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                    <span className="block">how are you?</span>
                  </div>
                </li>
                <li className="flex justify-start">
                  <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                    <span className="block">
                      Created by Marit Oliemans, this chat UI takes advantage of
                      Tailwind CSS for its design. With responsiveness built in,
                      it ensures a seamless chatting experience across different
                      screen sizes.
                    </span>
                    <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
                      Seen
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    
                  </div>
                </li>

                {/* voice messages */}

                <div className="col-start-1 col-end-8 p-3 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                      <div className="flex flex-row items-center">
                        <button className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-800 rounded-full h-8 w-10">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            ></path>
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </button>
                        <div className="flex flex-row items-center space-x-px ml-4">
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-12 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-6 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-5 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-3 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-1 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-1 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                          <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* badge of message */}
                <div className="flex justify-center mb-2">
                  <div
                    className="rounded py-2 px-4 bg-[#DDECF2]"
                  >
                    <p className="text-sm uppercase">February 20, 2018</p>
                  </div>
                </div>
                <li className="flex justify-end">
                  <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                    <span className="block">how are you?</span>
                  </div>
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                    A
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-700 w-full h-14 w-full pt-1">
              <ChatInput className="flex items-center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewChat;
