import React from "react";
import { useState } from "react";
import { NavBar } from "../components/loginComponents/NavBar";
// import ComplexNavbar from '../components/HeadNav'
// import TrendingBlogs from "../components/Blogs/TrendingBlogs";
import { BlogList } from "../components/Blogs/Cards";
import CategoryNav from "../components/loginComponents/CategoryNav";
// import Chat from "./Chat";
import ChatIcone from "../components/chat/ChatIcone";
import NewChat from "./NewChat";
// import DisplayBoard from "../components/Blogs/DisplayBoard";

function Home() {
  const [chat, setChat] = useState(false);
  const closeChat = () => {
    setChat(false);
  };
  const openChat = () => {
    console.log("printed");
    setChat(true);
  };
  return (
    <>
      {chat ? (
        <div>
          {/* <CategoryNav
           
          /> */}
          {/* <Chat /> */}
          <NewChat closeChat={closeChat} openChat={openChat} chat_is={true} />
        </div>
      ) : (
        <div>
          {/* <ComplexNavbar/> */}
          <NavBar />
          <ChatIcone closeChat={closeChat} openChat={openChat} chat_is={false} />
          <CategoryNav
            closeChat={closeChat}
            openChat={openChat}
            chat_is={false}
          />
          {/* <Carousel /> */}
          <BlogList />
        </div>
      )}

      {/* <DisplayBoard/> */}

      {/* <TrendingBlogs /> */}
    </>
  );
}

export default Home;
