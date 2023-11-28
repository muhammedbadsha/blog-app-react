import React from 'react'
import {IoVideocamOutline} from 'react-icons/io5'
import {VscCallOutgoing} from 'react-icons/vsc'
import {GoSearch} from 'react-icons/go'
import {IoSend} from 'react-icons/io5'
import { useState } from 'react'
import profile from '../assets/profile_pic/elenthkadavu_pic.jpg'
import {GrEmoji} from 'react-icons/gr'


const Chat = () => {
  return (
    <div className='flex  rounded-xl bg-gray-100 w-full h-[37rem]'>
        <div className='flex bg-red-200 w-[3em] h-[38rem]'>
            <div className='w-full bg-gray-100 h-full'></div>
        </div>
        <div className='flex rounded-xl px-2 bg-white w-full h-[38rem]'>
        <div className='sticky bg-red-400 w-1/3 h-[38rem] mt-2 my-2'>
            <div className='h-full '>
                <div className='bg-blue-200 h-16 flex items-center pl-12 font-medium text-2xl'>Chat</div>
                <div className='h-6 my-2 bg-black-200 flex justify-center'>

                <input type="text" className='h-7 my-2 w-5/6 border-b-4 border-1  ' />
                </div>
            </div>
        </div>
        <div className='sticky  w-2/3 h-full mx-2 my-2'>
            <div className='h-16 bg-white flex items-center px-14 font-medium text-xl justify-between'>
                <div className='flex items-center gap-2'>
                <div className='rounded-full w-10 h-10 bg-cover' style={{backgroundImage: `url(${profile})`}}></div>
                <div>group name or person name</div>
                </div>
                <div className='flex gap-6'>
                    <div className='flex gap-4 items-center border-3 borde-black'> 
                    <div className=''><IoVideocamOutline className='w-9 h-9'/></div>
                    <div><VscCallOutgoing className='w-6 h-6'/></div>
                    
                    </div>
                    <div className='flex items-center'>

                    <div><GoSearch /></div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-50 w-full h-[30em]'>

            </div>

            <div className='flex fixed w-[53rem] bottom-2 rounded '>
                <div className='absolute top-2 left-2 '><GrEmoji className='w-10 h-10' /></div>
                <div className='flex bg-green-100 w-full h-14 hover:ring-4'>

                <input type="text" name="" id=""  className='bg-green-100 px-16   w-5/6 h-14 border-0 outline-0 border-white hover:ring-4' />
                </div>
                <button className='absolute right-5 bottom-3 '><IoSend className='w-9 h-9 ' /></button>
            </div>
        </div>
        </div>
        {/* <div className='sticky bg-pink-100 w-1/3 h-full'>
            <div className='h-full'>

            </div>
        </div> */}
    </div>
  )
}

export default Chat