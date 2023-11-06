import React from 'react';

const VideoTitle = ({title, overview}) => {
    
  return (
    <div className='pt-36 px-12 absolute bg-gradient-to-r '>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-gray-700 text-white py-3 px-8 text-xl bg-opacity-50 rounded-lg'>
              ▶️ Play
            </button>
            <button className='bg-gray-500 mx-2 text-white py-3 px-8 text-xl bg-opacity-50 rounded-lg'>
               More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle;