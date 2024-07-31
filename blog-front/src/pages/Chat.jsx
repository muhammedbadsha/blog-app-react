import React from "react";
import { IoVideocamOutline } from "react-icons/io5";
import { VscCallOutgoing } from "react-icons/vsc";
import { GoSearch } from "react-icons/go";
import { IoSend } from "react-icons/io5";
import { useState } from "react";
import profile from "../assets/profile_pic/elenthkadavu_pic.jpg";
import { GrEmoji } from "react-icons/gr";
import { SiSemanticscholar } from "react-icons/si";

const Chat = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    // Handle the submission logic here
    console.log("Submit clicked with input:", inputValue);

    // Clear the input field after submission
    setInputValue("");
  };
  const seen = true;
  return (
    <div className="flex fixed rounded-xl bg-gray-100 w-full h-1/2 px-12 py-12">
      <div className="flex bg-red-200 w-[3em] h-full">
        <div className="w-full bg-pink-100 h-full"></div>
      </div>
      <div className="flex  rounded-xl px-2 bg-white w-full h-screen">
        <div className="sticky  w-1/3 h-full mt-2 my-2">
          <div className="h-full ">
            <div className=" h-16 flex items-center pl-12 font-medium text-2xl">
              Chat
            </div>
            <div className="h-7 my-1 mb-3 bg-black-200 flex justify-center">
              <div className="relative top-4 left-5">
                <GoSearch className="w-3 h-3" />
              </div>
              <input
                type="text"
                className="h-8 px-6 my-2 text-sm flex items-center w-5/6 border-b-4 border-2 outline-none"
                placeholder="search for archive files"
              />
            </div>

            <div className=" pt-4 w-full h-full py-3 h-full items-center gap-2 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-50">
              <div className="w-[25rem] bg-white pl-4 hover:bg-gray-50 h-20 rounded flex items-center">
                <div
                  className=" w-10 h-10 rounded-full bg-cover"
                  style={{ backgroundImage: `url(${profile})` }}
                ></div>
                <div className="flex justify-between w-full px-8">
                  <div>
                    <div className="font-medium text-xl">name</div>
                    <div className="text-gray-500 flex items-center gap-1">
                      <div>
                        {seen ? (
                          <SiSemanticscholar className="text-blue-600" />
                        ) : (
                          <SiSemanticscholar />
                        )}
                      </div>
                      latest message
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">12:00Am</div>
                  </div>
                </div>
              </div>
              <div className="w-[25rem] bg-white pl-4 hover:bg-gray-50 h-20 rounded flex items-center">
                <div
                  className=" w-10 h-10 rounded-full bg-cover"
                  style={{ backgroundImage: `url(${profile})` }}
                ></div>
                <div className="flex justify-between w-full px-8">
                  <div>
                    <div className="font-medium text-xl">name</div>
                    <div className="text-gray-500 flex items-center gap-1">
                      <div>
                        {seen ? (
                          <SiSemanticscholar className="text-blue-600" />
                        ) : (
                          <SiSemanticscholar />
                        )}
                      </div>
                      latest message
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">12:00Am</div>
                  </div>
                </div>
              </div>
              <div className="w-[25rem] bg-white pl-4 hover:bg-gray-50 h-20 rounded flex items-center">
                <div
                  className=" w-10 h-10 rounded-full bg-cover"
                  style={{ backgroundImage: `url(${profile})` }}
                ></div>
                <div className="flex justify-between w-full px-8">
                  <div>
                    <div className="font-medium text-xl">name</div>
                    <div className="text-gray-500 flex items-center gap-1">
                      <div>
                        {seen ? (
                          <SiSemanticscholar className="text-blue-600" />
                        ) : (
                          <SiSemanticscholar />
                        )}
                      </div>
                      latest message
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">12:00Am</div>
                  </div>
                </div>
              </div>
              <div className="w-[25rem] bg-white pl-4 hover:bg-gray-50 h-20 rounded flex items-center">
                <div
                  className=" w-10 h-10 rounded-full bg-cover"
                  style={{ backgroundImage: `url(${profile})` }}
                ></div>
                <div className="flex justify-between w-full px-8">
                  <div>
                    <div className="font-medium text-xl">name</div>
                    <div className="text-gray-500 flex items-center gap-1">
                      <div>
                        {seen ? (
                          <SiSemanticscholar className="text-blue-600" />
                        ) : (
                          <SiSemanticscholar />
                        )}
                      </div>
                      latest message
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">12:00Am</div>
                  </div>
                </div>
              </div>
              <div className="w-[25rem] bg-white pl-4 hover:bg-gray-50 h-20 rounded flex items-center">
                <div
                  className=" w-10 h-10 rounded-full bg-cover"
                  style={{ backgroundImage: `url(${profile})` }}
                ></div>
                <div className="flex justify-between w-full px-8">
                  <div>
                    <div className="font-medium text-xl">name</div>
                    <div className="text-gray-500 flex items-center gap-1">
                      <div>
                        {seen ? (
                          <SiSemanticscholar className="text-blue-600" />
                        ) : (
                          <SiSemanticscholar />
                        )}
                      </div>
                      latest message
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">12:00Am</div>
                  </div>
                </div>
              </div>
              <div className="w-[25rem] bg-white pl-4 hover:bg-gray-50 h-20 rounded flex items-center">
                <div
                  className=" w-10 h-10 rounded-full bg-cover"
                  style={{ backgroundImage: `url(${profile})` }}
                ></div>
                <div className="flex justify-between w-full px-8">
                  <div>
                    <div className="font-medium text-xl">name</div>
                    <div className="text-gray-500 flex items-center gap-1">
                      <div>
                        {seen ? (
                          <SiSemanticscholar className="text-blue-600" />
                        ) : (
                          <SiSemanticscholar />
                        )}
                      </div>
                      latest message
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">12:00Am</div>
                  </div>
                </div>
              </div>
              <div className="w-[25rem] bg-white pl-4 hover:bg-gray-50 h-20 rounded flex items-center">
                <div
                  className=" w-10 h-10 rounded-full bg-cover"
                  style={{ backgroundImage: `url(${profile})` }}
                ></div>
                <div className="flex justify-between w-full px-8">
                  <div>
                    <div className="font-medium text-xl">name</div>
                    <div className="text-gray-500 flex items-center gap-1">
                      <div>
                        {seen ? (
                          <SiSemanticscholar className="text-blue-600" />
                        ) : (
                          <SiSemanticscholar />
                        )}
                      </div>
                      latest message
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">12:00Am</div>
                  </div>
                </div>
              </div>
              <div className="w-[25rem] bg-white pl-4 hover:bg-gray-50 h-20 rounded flex items-center">
                <div
                  className=" w-10 h-10 rounded-full bg-cover"
                  style={{ backgroundImage: `url(${profile})` }}
                ></div>
                <div className="flex justify-between w-full px-8">
                  <div>
                    <div className="font-medium text-xl">name</div>
                    <div className="text-gray-500 flex items-center gap-1">
                      <div>
                        {seen ? (
                          <SiSemanticscholar className="text-blue-600" />
                        ) : (
                          <SiSemanticscholar />
                        )}
                      </div>
                      latest message
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">12:00Am</div>
                  </div>
                </div>
              </div>
              <div className="w-[25rem] bg-white pl-4 hover:bg-gray-50 h-20 rounded flex items-center">
                <div
                  className=" w-10 h-10 rounded-full bg-cover"
                  style={{ backgroundImage: `url(${profile})` }}
                ></div>
                <div className="flex justify-between w-full px-8">
                  <div>
                    <div className="font-medium text-xl">name</div>
                    <div className="text-gray-500 flex items-center gap-1">
                      <div>
                        {seen ? (
                          <SiSemanticscholar className="text-blue-600" />
                        ) : (
                          <SiSemanticscholar />
                        )}
                      </div>
                      latest message
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">12:00Am</div>
                  </div>
                </div>
              </div>
              <div className="w-[25rem] bg-white pl-4 hover:bg-gray-50 h-20 rounded flex items-center">
                <div
                  className=" w-10 h-10 rounded-full bg-cover"
                  style={{ backgroundImage: `url(${profile})` }}
                ></div>
                <div className="flex justify-between w-full px-8">
                  <div>
                    <div className="font-medium text-xl">name</div>
                    <div className="text-gray-500 flex items-center gap-1">
                      <div>
                        {seen ? (
                          <SiSemanticscholar className="text-blue-600" />
                        ) : (
                          <SiSemanticscholar />
                        )}
                      </div>
                      latest message
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">12:00Am</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="bg-green-200 flex flex-col justify-between w-full  lg:h-[47rem] md:h-[43rem] sm:h-[38rem] h-[38rem]">
            <div className="h-16 bg-white flex items-center px-14 font-medium text-xl justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="rounded-full w-10 h-10 bg-cover"
                  style={{ backgroundImage: `url(${profile})` }}
                ></div>
                <div>group name or person name</div>
              </div>
              <div className="flex gap-6">
                <div className="flex gap-4 items-center border-3 borde-black">
                  <div className="">
                    <IoVideocamOutline className="w-9 h-9" />
                  </div>
                  <div>
                    <VscCallOutgoing className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex items-center">
                  <div>
                    <GoSearch />
                  </div>
                </div>
              </div>
            </div>
       {/* body */}
            <div className="bg-gray-50 h-full px-10 w-full pb-34 overflow-y-auto">
              <div className="w-full py-2 flex justify-start">
                <div className="flex justify-start bg-blue-100 my-2 px-2 rounded-sm">
                  replu
                </div>
              </div>
              <div className="w-full flex justify-end">
                <div className="flex justify-end bg-blue-100 py-2 px-2 rounded-sm">
                  my message
                </div>
              </div>
              <div className="w-full py-2 flex justify-start">
                <div className="flex justify-start bg-blue-100 my-2 px-2 rounded-sm">
                  replu
                </div>
              </div>
              <div className="w-full flex justify-end">
                <div className="flex justify-end bg-blue-100 py-2 px-2 rounded-sm">
                  my message
                </div>
              </div>
              <div className="w-full py-2 flex justify-start">
                <div className="flex justify-start bg-blue-100 my-2 px-2 rounded-sm">
                  replu
                </div>
              </div>
              <div className="w-full flex justify-end">
                <div className="flex justify-end bg-blue-100 py-2 px-2 rounded-sm">
                  my message
                </div>
              </div>
              <div className="w-full py-2 flex justify-start">
                <div className="flex justify-start bg-blue-100 my-2 px-2 rounded-sm">
                  replu
                </div>
              </div>
              <div className="w-full flex justify-end">
                <div className="flex justify-end bg-blue-100 py-2 px-2 rounded-sm">
                  my message
                </div>
              </div>
              <div className="w-full py-2 flex justify-start">
                <div className="flex justify-start bg-blue-100 my-2 px-2 rounded-sm">
                  replu
                </div>
              </div>
              <div className="w-full flex justify-end">
                <div className="flex justify-end bg-blue-100 py-2 px-2 rounded-sm">
                  my message
                </div>
              </div>
              <div className="w-full py-2 flex justify-start">
                <div className="flex justify-start bg-blue-100 my-2 px-2 rounded-sm">
                  replu
                </div>
              </div>
              <div className="w-full flex justify-end">
                <div className="flex justify-end bg-blue-100 py-2 px-2 rounded-sm">
                  my message
                </div>
              </div>
              <div className="w-full py-2 flex justify-start">
                <div className="flex justify-start bg-blue-100 my-2 px-2 rounded-sm">
                  replu
                </div>
              </div>
              <div className="w-full flex justify-end">
                <div className="flex justify-end bg-blue-100 py-2 px-2 rounded-sm">
                  my message
                </div>
              </div>
              <div className="w-full py-2 flex justify-start">
                <div className="flex justify-start bg-blue-100 my-2 px-2 rounded-sm">
                  replu
                </div>
              </div>
              <div className="w-full flex justify-end">
                <div className="flex justify-end bg-blue-100 py-2 px-2 rounded-sm">
                  my message
                </div>
              </div>
              <div className="w-full py-2 flex justify-start">
                <div className="flex justify-start bg-blue-100 my-2 px-2 rounded-sm">
                  replu
                </div>
              </div>
              <div className="w-full flex justify-end">
                <div className="flex justify-end bg-blue-100 py-2 px-2 rounded-sm">
                  my message
                </div>
              </div>
              <div className="w-full py-2 flex justify-start">
                <div className="flex justify-start bg-blue-100 my-2 px-2 rounded-sm">
                  replu
                </div>
              </div>
              <div className="w-full flex justify-end">
                <div className="flex justify-end bg-blue-100 py-2 px-2 rounded-sm">
                  my message
                </div>
              </div>
              <div className="w-full py-2 flex justify-start">
                <div className="flex justify-start bg-blue-100 my-2 px-2 rounded-sm">
                  replu
                </div>
              </div>
              <div className="w-full flex justify-end">
                <div className="flex justify-end bg-blue-100 py-2 px-2 rounded-sm">
                  my message
                </div>
              </div>
              <div className="w-full py-2 flex justify-start">
                <div className="flex justify-start bg-blue-100 my-2 px-2 rounded-sm">
                  replu
                </div>
              </div>
              <div className="w-full flex justify-end">
                <div className="flex justify-end bg-blue-100 py-2 px-2 rounded-sm">
                  my message
                </div>
              </div>
              <div className="w-full py-2 flex justify-start">
                <div className="flex justify-start bg-blue-100 my-2 px-2 rounded-sm">
                  replu
                </div>
              </div>
              <div className="w-full flex justify-end">
                <div className="flex justify-end bg-blue-100 py-2 px-2 rounded-sm">
                  my message
                </div>
              </div>
              <div className="w-full py-2 flex justify-start">
                <div className="flex justify-start bg-blue-100 my-2 px-2 rounded-sm">
                  replu
                </div>
              </div>
              <div className="w-full flex justify-end">
                <div className="flex flex-col justify-end bg-blue-100 py-2 px-2 rounded-sm">
                  <div> my message</div>
                 <div className="flex text-[#A9A9A9] justify-end">12:30AM</div>
                </div>
              </div>
            </div>
        {/* footer */}
        <div className="w-full  flex bg-black">
          <div className="flex justify-items-end  mx-2 w-full h-14g-black-300 rounded-sm hover:shadow-lg ">
            <div className="relative top-2 left-1 z-30">
              <GrEmoji className="w-10 h-10" />
            </div>
            <div
              className="
            
             z-0 flex bg-white px-2 w-full h-14 
             "
            >
              <input
                type="text"
                name=""
                id=""
                value={inputValue}
                onChange={handleInputChange}
                className="bg-white w-full h-14  border-0 outline-0 border-white "
                />
            </div>
            {inputValue.trim() !== "" && (
              <button
              onClick={handleSubmit}
              className="relative right-1 bottom-0 z-30"
              >
                <IoSend className="w-9 h-9 " />
              </button>
            )}
          </div>
          </div>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default Chat;
