import React from 'react'
import '../../staticfiles/logincssfiles/nav.css'
import { RiSearch2Line } from "react-icons/ri";
export const NavBar = () => {
  return (
    <nav className='nav'>
        
        <div className='left-nav'>
            <div className='nav-left-head'>Blogger</div>
            <div></div>
        </div>
        <div className='main-right-nav'>
            <div className='center-nav'>
                <div>Home</div>
                <div>About</div>
                <div>Article</div>
                <div>Contact Us</div>
            </div>
            <div className='left_nav'>
            <input className='search-input' placeholder="Search"/><div className='search-icone'><RiSearch2Line className='search-icone-ic' /></div>
            </div>
        </div>   
     </nav>
  )
}
