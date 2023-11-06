import React from 'react';

const VideoTitle = ({title, overview}) => {
    
  return (
    <div className='w-screen aspect-video pt-[20%] px-28 text-white absolute bg-gradient-to-r from-black bg-opacity-5'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='py-4 text-md w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white hover:bg-opacity-80 text-black py-3 px-8 text-xl font-semibold rounded-lg'>
              ▶ Play
            </button>
            <button className='bg-gray-500 hover:bg-opacity-80 mx-2 text-white py-3 px-8 text-xl font-semibold bg-opacity-50 rounded-lg'>
              More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle;