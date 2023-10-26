import React from "react";
import { NavBar } from "../components/loginComponents/NavBar";
import TrendingBlogs from "../components/Blogs/TrendingBlogs";

function Home() {
  return (
    <>
      <NavBar />
      <TrendingBlogs />
    </>
  );
}

export default Home;
