import React from 'react'

function DisplayBoard() {
  return (
    <div className='w-screen h-96 bg-red-500 '>
        
      <div className='flex items-center w-screen h-full   bg-gray-900  px-15 '>
        <div className='bg-yellow-300 w-full h-80 '></div>
        <div className='bg-green-200 w-full h-80'></div>
        <div className='bg-pink-200 w-full h-80'></div>
        <div className='bg-gray-500 w-full h-80'></div>
      </div>
    </div>
  )
}

export default DisplayBoard
