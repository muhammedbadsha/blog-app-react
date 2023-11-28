import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import React from 'react'
import classNames from 'classnames';
import { IoCloseSharp } from "react-icons/io5";
import { BiBadge } from "react-icons/bi";


const CategoryNav = ({openChat, closeChat, chat_is}) => {
  // setChat(true)
  const [userAuthenticated,setuserAuthenticated] = useState(true)
  const [isFixed, setIsFixed] = useState(false);
  const handleScroll = () => {
    const scrollTop = window.scrollY; 
    setIsFixed(scrollTop >= 73);
  };
const handleCloseOpen=()=>{
  if (chat_is === true){
    // setChat(true)
    closeChat()
  }else{

    openChat()
  }
}
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div> 
  
      <nav   className={classNames('bg-gray-100 dark:bg-gray-700 w-full transition-all duration-300 z-30', {
        'fixed top-0 left-0 right-0': isFixed,
        'relative': !isFixed,
      })}>
    <div className="bg-gray-100 max-w-screen-xl px-4 py-3 mx-auto flex justify-between">
     { chat_is? (<div className='bg-gray-100 flex items-center text-2xl font-medium'>
      <h1 className=''></h1>
     </div>):(

     
      <div className="scrollbarCate flex items-center overflow-x-auto scroll-pl-6">
        <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
          <li>
            <Link
              className="text-gray-900 dark:text-white hover:underline"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link className="text-gray-900 dark:text-white hover:underline">
              Company
            </Link>
          </li>
          <li>
            <Link className="text-gray-900 dark:text-white hover:underline">
              Team
            </Link>
          </li>
          <li>
            <Link className="text-gray-900 dark:text-white hover:underline">
              Features
            </Link>
          </li>
        </ul>
      </div>)}
      { userAuthenticated &&
      <div  className="">
        { chat_is? (<IoCloseSharp className='w-10 h-10' onClick={handleCloseOpen}/>):(
          <div className=' w-30 h-30'>
            <div className='absolute top-0 right-10 w-5 h-5 rounded-full bg-red-400 flex items-center justify-center text-white'>2</div>
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 18"
          onClick={handleCloseOpen}
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
          />
        </svg>
        </div>
        )}
      </div>
      }
    </div>
  </nav>
  </div>
  )
}

export default CategoryNav