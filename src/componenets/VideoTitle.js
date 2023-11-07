import React from 'react';

const VideoTitle = ({title, overview}) => {
    
  return (
    <div className='w-screen aspect-video pt-[15%] px-28 text-white absolute bg-gradient-to-r'>
        <h1 className='text-xl  md:text-4xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-3 text-[15px] w-1/4'>{overview}</p>
        <div className='my-4 md:m-0'>
            <button className='bg-white hover:bg-opacity-80 text-black py-1 md:py-2 px-3 md:px-6 text-xl font-semibold rounded-lg'>
              ▶ Play
            </button>
            <button className='bg-gray-500 hover:bg-opacity-80 mx-2 text-white py-1 md:py-2 px-3 md:px-6 text-xl font-semibold bg-opacity-50 rounded-lg'>
              More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle;