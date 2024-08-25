// import { Switch } from "@headlessui/react";
import React from "react";
import { useState } from "react";
import { useRef, useEffect } from "react";
import {
  AiOutlineClose,
  AiOutlineLike,
  AiFillLike,
} from "react-icons/ai";

const Comments = ({ isOpen, closeModal }) => {
  const [Likes, setLikes] = useState(false);
  const [count,setCount] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const hadleLikes = (action) =>{
    if (action === "decrement" && count !== 0){
      setCount(count-1)
    }else if (action === "increment"){
      setCount(count +1)
    }
  }

  const handleFocus = () => {
    setIsExpanded(true);
  };
  const hadileCommentSubmit = (event) => {
    event.preventDefault();
    if (inputValue === "") {
      return false;
    }
  };
  const commentModalRef = useRef();
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        commentModalRef.current &&
        !commentModalRef.current.contains(event.target)
      ) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex items-center  justify-center">
      <div
        ref={commentModalRef}
        className="fixed bg-white p-8 rounded h-full w-80 absolute top-0 right-0"
      >
        <AiOutlineClose
          onClick={closeModal}
          className="absolute top-0 right-0 cursor-pointer mr-4 pt-2 w-7 h-7"
        />

        <h2 className="text-2xl mb-4">Comments</h2>
        <div
          className={`max-w-md mx-auto bg-white rounded-lg p-4 shadow-md ${
            isExpanded ? "h-34" : "h-20"
          }`}
        >
          <form onSubmit={() => hadileCommentSubmit}>
            <div className="border border-gray-300 p-2 rounded-md">
              <input
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
                onFocus={handleFocus}
                // onBlur={handleBlur}
                className="w-full focus:outline-none h-8"
                placeholder="Type something..."
              />
            </div>
            {isExpanded ? (
              <div className="flex justify-end gap-4 px-2">
                <div
                  className="cursor-pointer text-red-500"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  cancel
                </div>
                {inputValue != null ? (
                  <button className="text-blue-700">save</button>
                ) : null}
              </div>
            ) : (
              <></>
            )}
          </form>
        </div>
        <div className="py-4 ">
          <div className="py-4 max-h-32 border-t-[2px] border-b-[1px]">
            <div>
              <p>value ...Read more</p>
            </div>

            <div className="flex gap-4 justify-end px-5">
              {Likes ? (
                <div
                  onClick={() => setLikes(!Likes)}
                  className="flex justify-center items-center"
                >
                  <AiFillLike onClick={()=>hadleLikes('decrement')}/>{count}
                </div>
              ) : (
                <div
                  onClick={() => setLikes(!Likes)}
                  className="flex justify-center items-center"
                >
                  <AiOutlineLike onClick={()=>hadleLikes('increment')}/>{count}
                </div>
              )}
       

              <div className="flex justify-center items-center">reply</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
