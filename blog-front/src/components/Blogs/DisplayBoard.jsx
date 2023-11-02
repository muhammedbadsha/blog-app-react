import React from 'react'

function DisplayBoard() {
  return (
    <div className='w-screen h-96 bg-red-500 flex items-center justify-center'>
        
      <div className='flex items-center w-5/6 h-5/6 bg-gray-900  px-15 '>
        
        <div className='bg-yellow-300 w-full h-80 '></div>
        <div className='bg-green-200 w-full h-80'></div>
        <div className='bg-pink-200 w-full h-80'></div>
        <div className='bg-gray-500 w-full h-80'></div>
        <div className='bg-green-100 w-full h-80'></div>
        <div className='bg-pink-100 w-full h-80'></div>
      </div>
      <div className='relative'>
        <div className='bg-blue-300 position left-1/2 w-10 h-10'></div>
        <div className='bg-blue-100 position right-1/2 w-10 h-10'></div>
      </div>
    </div>
  )
}

export default DisplayBoard
