import React from "react";
import img_6_sq from "../../assets/blog_pic/hero_5.jpg";
import hero from "../../assets/blog_pic/hero_3.jpg";
import profile from "../../assets/blog_pic/person_2.jpg"
import { Link } from "react-router-dom";

const BlogCard = ({ title, author, image,date,time ,description }) => {
  return (
  
      
    <div className="w-full lg:w-3/4  sm:w-2/5 md:w-2/3 rounded-md shadow bg-cover hover:shadow-lg"   >
      <div className="py-3 px-3 rounded-lg w-full h-44 bg-gray-400 bg-cover" style={{ backgroundImage:`url(${image})` }}> 
       
     </div>
      <div className="py-3 px-3  ">
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
      <div>
        
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Blog Title 2',
      author: 'Author 2',
      image: hero,
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Blog Title 2',
      author: 'Author 2',
      image: hero,
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Blog Title 2',
      author: 'Author 2',
      image: img_6_sq,
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Blog Title 2',
      author: 'Author 2',
      image: hero,
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Blog Title 2',
      author: 'Author 2',
      image: hero,
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Blog Title 2',
      author: 'Author 2',
      image: img_6_sq,
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Blog Title 2',
      author: 'Author 2',
      image: img_6_sq,
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more blog objects
  ];

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 lg:gap-6 md:gap-6 lg:px-12 md:px-5 lg:py-12 md:py-7 justify-center">
      {blogs.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </div>
  );
};

