import React from "react";
import { useState } from "react";
import { NavBar } from "../components/loginComponents/NavBar";
// import TrendingBlogs from "../components/Blogs/TrendingBlogs";
import { BlogList } from "../components/Blogs/Cards";
import Carousel from "../components/Blogs/Carousel";
import CategoryNav from "../components/loginComponents/CategoryNav";
import Chat from "./Chat";
// import DisplayBoard from "../components/Blogs/DisplayBoard";

function Home() {
  const [chat, setChat] = useState(false);
  const closeChat =()=>{
    setChat(false)
  }
  const openChat=()=>{
    console.log("printed");
    setChat(true)
  }
  return (
    <>
      {chat ? (
        <div>
          <CategoryNav closeChat={closeChat} openChat = {openChat} chat_is={true}/>
          <Chat />
        </div>
        
        ) : (
          <div>
          <NavBar />
          <CategoryNav closeChat={closeChat} openChat = {openChat} chat_is={false}/>
          <Carousel />
          <BlogList />
        </div>
      )}

      {/* <DisplayBoard/> */}

      {/* <TrendingBlogs /> */}
    </>
  );
}

export default Home;
