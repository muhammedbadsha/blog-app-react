import React from "react";
import { useState } from "react";
// components
import { BlogCard } from "../components/Blogs/Cards";
import Comments from "../components/Blogs/Comments";
import { NavBar } from "../components/loginComponents/NavBar";
// router domes
import { Link } from "react-router-dom";
// icones
import { PiHandsClappingThin } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa6";
import { LuShare } from "react-icons/lu";
import { CiMenuKebab } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
// images
import img_4_horizontal from "../assets/blog_pic/img_4_horizontal.jpg";
import profile from "../assets/profile_pic/elenthkadavu_pic.jpg";
const DetailViewBlog = () => {
  const [Saved, setSaved] = useState(false);
  const [follow, setFollow] = useState(false);

  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

  const openCommentModal = () => {
    setIsCommentModalOpen(true);
  };

  const closeCommentModal = () => {
    setIsCommentModalOpen(false);
  };

  const blogs = [
    {
      title: "Blog Title 1",
      author: "Author 1",
      image: img_4_horizontal,
      time: "9:00AM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Blog Title 2",
      author: "Author 2",
      image: img_4_horizontal,
      time: "9:00AM",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Blog Title 2",
      author: "Author 2",
      image: img_4_horizontal,
      time: "9:00AM",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Blog Title 2",
      author: "Author 2",
      image: img_4_horizontal,
      time: "9:00AM",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    // Add more blog objects
  ];
  return (
    <>
      <NavBar />
      {isCommentModalOpen && (
        <Comments isOpen={isCommentModalOpen} closeModal={closeCommentModal} />
      )}
      <div className="flex flex-col justify-center items-center pl-15">
        <div className="flex  w-full sm:w-screen md:w-[45em] h-auto py-7 px-3 mt-3 lg:w-[50em] items-center">
          <h1 className="text-4xl text-medium">Blog heading</h1>
        </div>
        <div className="flex w-full sm:w-screen md:w-screen px-3 md:w-[45em] lg:w-[50em] items-center py-5">
          <div
            className="lg:w-10 md:w-7 sm:w-5  lg:h-10 md:h-7 sm:h-5 rounded-full bg-gray-300 bg-cover "
            style={{ backgroundImage: `url(${profile})` }}
          ></div>
          <div className="flex flex-col w-full px-3">
            <div className="flex items-center  gap-3">
              <div>
                <Link>Name of the admin</Link>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => setFollow(!follow)}
              >
                {follow ? (
                  <div className="text-green-500">following</div>
                ) : (
                  <div className="text-green-500">follow</div>
                )}
              </div>
            </div>
            <div className=" text-gray-400 flex gap-6">
              <div>7 min read</div>
              <div>mar-29</div>
            </div>
          </div>
        </div>
        <div className="flex px-10 justify-between items-center h-12 w-full border-t-gray-400 md:w-[45em] lg:w-[50em] border-b-gray-100 border-b-[1px] border-t-[1px]">
          <div className="flex gap-10 ">
            <div className="items-center flex gap-2">
              <div>
                <PiHandsClappingThin />
              </div>
              <div>2k</div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <FaRegComment onClick={openCommentModal} />
              </div>
              <div>7</div>
            </div>
          </div>
          <div className=" flex gap-10">
            <div onClick={() => setSaved(!Saved)}>
              <div className="w-5 h-5">
                {" "}
                {Saved ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    viewBox="0 0 24 24"
                    id="bookmark"
                  >
                    <path
                      fill="#6563FF"
                      d="M16,2H8C6.3,2,5,3.3,5,5v16c0,0.2,0,0.3,0.1,0.5C5.4,22,6,22.1,6.5,21.9l5.5-3.2l5.5,3.2C17.7,22,17.8,22,18,22c0.6,0,1-0.4,1-1V5C19,3.3,17.7,2,16,2z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    viewBox="0 0 24 24"
                    id="bookmark"
                  >
                    <path
                      fill="#ADADC5"
                      d="M16,2H8C6.3,2,5,3.3,5,5v16c0,0.2,0,0.3,0.1,0.5C5.4,22,6,22.1,6.5,21.9l5.5-3.2l5.5,3.2C17.7,22,17.8,22,18,22c0.6,0,1-0.4,1-1V5C19,3.3,17.7,2,16,2z"
                    ></path>
                  </svg>
                )}
              </div>
            </div>

            <div>
              <LuShare />
            </div>
            <div>
              <CiMenuKebab />
            </div>
          </div>
        </div>

        <div className="lg:w-[50em] md:w-[45em] h-auto px-5 pt-8">
          <div
            className="w-[18em] lg:w-[47em] md:w-[39em] sm:w-[29em] h-[10em] lg:h-80 md:h-[19em] sm:h-[15em] bg-cover"
            style={{ backgroundImage: `url(${img_4_horizontal})` }}
          ></div>
        </div>

        <div className="lg:w-[50em] md:w-[45em] px-2 h-auto bg-red-40 py-8">
          <p className="flex justify-start text-gray-500">about</p>
        </div>

        <div className="lg:w-[50em] md:w-[45em] px-2 h-auto bg-red-40 py-8">
          <p className="flex justify-start text-black-500 font-sans">
            discription
          </p>
        </div>

        <div className="lg:w-[50em] md:w-[45em] px-2 h-auto bg-red-40 py-8">
          <p className="flex justify-start text-gray-500 font-sans">
            conclution
          </p>
        </div>
        <div className="flex px-10  justify-between items-center h-12 w-full border-t-gray-400 lg:w-[50em] md:w-[45em] border-b-gray-100 border-b-[1px] border-t-[1px]">
          <div className="flex gap-10 ">
            <div className="items-center flex gap-2">
              <div>
                <PiHandsClappingThin />
              </div>
              <div>2k</div>
            </div>
            <div onClick={openCommentModal} className="flex items-center gap-2">
              <div>
                <FaRegComment />
              </div>
              <div>7</div>
            </div>
          </div>
          <div className=" flex gap-10">
            <div onClick={() => setSaved(!Saved)}>
              <div className="w-5 h-5">
                {" "}
                {Saved ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    viewBox="0 0 24 24"
                    id="bookmark"
                  >
                    <path
                      fill="#6563FF"
                      d="M16,2H8C6.3,2,5,3.3,5,5v16c0,0.2,0,0.3,0.1,0.5C5.4,22,6,22.1,6.5,21.9l5.5-3.2l5.5,3.2C17.7,22,17.8,22,18,22c0.6,0,1-0.4,1-1V5C19,3.3,17.7,2,16,2z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    viewBox="0 0 24 24"
                    id="bookmark"
                  >
                    <path
                      fill="#ADADC5"
                      d="M16,2H8C6.3,2,5,3.3,5,5v16c0,0.2,0,0.3,0.1,0.5C5.4,22,6,22.1,6.5,21.9l5.5-3.2l5.5,3.2C17.7,22,17.8,22,18,22c0.6,0,1-0.4,1-1V5C19,3.3,17.7,2,16,2z"
                    ></path>
                  </svg>
                )}
              </div>
            </div>

            <div>
              <LuShare />
            </div>
            <div>
              <CiMenuKebab />
            </div>
          </div>
        </div>
        <div className="bg-gray-100 w-full flex justify-center">
          <div className="py-20 flex flex-col w-[50em] justify-center items-center border-b-[1px] border-white">
            <div className="lg:w-[50em] md:w-[45em]">
              <div
                className="w-20 h-20 rounded-full bg-cover py-4"
                style={{ backgroundImage: `url(${profile})` }}
              ></div>
              <div>
                <div className="flex flex-start justify-between pt-4">
                  <div className="font-medium text-xl">profile name</div>
                  <div className="flex gap-3">
                    {follow ? (
                      <button
                        className="bg-white border-[2px] border-green-600 w-auto rounded-xl"
                        onClick={() => setFollow(!follow)}
                      >
                        <p className="px-2">following</p>
                      </button>
                    ) : (
                      <button
                        className="bg-[#156D12] w-auto rounded-xl"
                        onClick={() => setFollow(!follow)}
                      >
                        <p className="px-4">Follow</p>
                      </button>
                    )}
                    <Link className="flex justify-center rounded-full w-7 h-7 bg-[#156D12] items-center">
                      {" "}
                      <HiOutlineMail />{" "}
                    </Link>
                  </div>
                </div>
                <div>
                  <p>1.2M</p>followers
                </div>
                <div className="px-3 text-gray-400">about</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 w-full flex  justify-center">
          <div className="flex flex-col w-full  justify-center">
            <div className="w-full font-bold text-xl px-2 lg:pl-16 md:px-3 sm:px-2 lg:py-4 md:py-3 sm:py-2 py-2">
              More from Profile Name
            </div>

            <div className="w-full grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:gap-7 md:gap-6 sm:gap-6 gap-6 lg:pl-20 md:pl-15 sm:pl-10 py-2 px-1  lg:py-3 md:py-2 md:px-2 justify-center">
              {blogs.map((blog, index) => (
                <BlogCard key={index} {...blog} />
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-100 w-full flex  justify-center">
          <div className="flex flex-col w-full  justify-center">
            <div className="w-full font-bold text-xl pl-2  lg:pl-16 md:pl-3 sm:pl-2 lg:py-2 md:py-3 sm:py-2 py-2">
              Recomented from Medium
            </div>

            <div className="w-full grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:gap-7 md:gap-6 sm:gap-6 gap-6 lg:pl-20 md:pl-15 sm:pl-10 py-2 px-1  lg:py-3 md:py-2 md:px-2 justify-center">
              {blogs.map((blog, index) => (
                <BlogCard key={index} {...blog} className="py-2"/>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default DetailViewBlog;
