import React from "react";
import { useState } from "react";
import img_6_sq from "../../assets/blog_pic/hero_5.jpg";
import hero from "../../assets/blog_pic/hero_3.jpg";
import profile from "../../assets/blog_pic/person_2.jpg"
// import blue_icon from "../../assets/icons/save_icon_blue.png"
// import normal_icon from "../../assets/icons/save_icon_normal.png"
// import { Link } from "react-router-dom";
import {AiOutlineMinusCircle} from "react-icons/ai"
import {CiMenuKebab} from "react-icons/ci"
export const BlogCard = ({ title, author, image,date,time ,description }) => {
  const [Saved, setSaved] =useState(false)
  return (
  
      
    <div className="flex flex-row  lg:flex-col md:flex-col sm:flex-col w-screen lg:w-5/6   sm:w-5/6 md:w-5/6 rounded-md shadow bg-cover hover:shadow-lg">
      <div className=" justify-center items-center py-3 px-3 rounded-lg lg:w-full md:w-full sm:w-full w-64 lg:h-44 md:h-44 sm:h-44 h-40 bg-gray-400 bg-cover " style={{ backgroundImage:`url(${image})` }}>
      
     </div>
     <div>
      <div className="py-3 px-3 flex justify-between">
        <h1 className="text-xl font-semibold ">{title}</h1>
       
      </div>
      <div className="px-4 flex">
        <div className="w-5 h-5 rounded-full bg-red-400 bg-cover" style={{backgroundImage: `url(${profile})`}}>
        </div>
        <div className="px-3 text-xs text-gray-400 flex justify-between w-full">
          <p>
          {author} 
          </p>
          <p className="text-natural-400 flex justify-end ">{date} {time}</p>
         
          </div>
      </div>
      <div>
        <p className="px-3 py-3">{description}</p>
      </div>
      <div className="flex gap-4 py-3 px-3 justify-end">
        <div>
        <div className="w-5 h-5" onClick={() => setSaved(!Saved)}> {Saved ? (<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="bookmark"><path fill="#6563FF" d="M16,2H8C6.3,2,5,3.3,5,5v16c0,0.2,0,0.3,0.1,0.5C5.4,22,6,22.1,6.5,21.9l5.5-3.2l5.5,3.2C17.7,22,17.8,22,18,22c0.6,0,1-0.4,1-1V5C19,3.3,17.7,2,16,2z"></path></svg>):(
       <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="bookmark"><path fill="#ADADC5" d="M16,2H8C6.3,2,5,3.3,5,5v16c0,0.2,0,0.3,0.1,0.5C5.4,22,6,22.1,6.5,21.9l5.5-3.2l5.5,3.2C17.7,22,17.8,22,18,22c0.6,0,1-0.4,1-1V5C19,3.3,17.7,2,16,2z"></path></svg>)}</div>
        <div></div>
        </div>
        <div><AiOutlineMinusCircle /></div>
        <div><CiMenuKebab/></div>
        </div>
      </div>
    </div>
    
  );
};

export const BlogList = () => {
  const blogs = [
    {
      title: 'Blog Title 1',
      author: 'Author 1',
      image: img_6_sq,
      time: "9:00AM",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Blog Title 2',
      author: 'Author 2',
      image: hero,
      time: "9:00AM",
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Blog Title 2',
      author: 'Author 2',
      image: hero,
      time: "9:00AM",
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Blog Title 2',
      author: 'Author 2',
      image: img_6_sq,
      time: "9:00AM",
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Blog Title 2',
      author: 'Author 2',
      image: hero,
      time: "9:00AM",
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Blog Title 2',
      author: 'Author 2',
      image: hero,
      time: "11:00AM",
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Blog Title 2',
      author: 'Author 2',
      image: img_6_sq,
      time: "10:00AM",
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Blog Title 2',
      author: 'Author 2',
      image: img_6_sq,
      time: "9:00AM",
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more blog objects
  ];

  return (
    <div className="grid xl-grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 lg:gap-7 md:gap-6 sm:gap-6 gap-6 lg:px-16 md:px-6 sm:pl-10 py-8 px-10  lg:py-12 md:py-10 md:px-14 justify-center">
      {blogs.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </div>
  );
};



