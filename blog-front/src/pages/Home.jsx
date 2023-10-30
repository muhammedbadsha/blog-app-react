import React from "react";
import { NavBar } from "../components/loginComponents/NavBar";
// import TrendingBlogs from "../components/Blogs/TrendingBlogs";
import { BlogList } from "../components/Blogs/Cards";
import DisplayBoard from "../components/Blogs/DisplayBoard";

function Home() {
  return (
    <>
      <NavBar />
      <DisplayBoard/>
      <BlogList />
      {/* <TrendingBlogs /> */}
    </>
  );
}

export default Home;
