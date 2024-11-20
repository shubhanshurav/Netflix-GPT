import React from 'react';
import { PiPlayFill } from "react-icons/pi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const VideoTitle = ({title, overview}) => {
    
  return (
    <div className='w-screen aspect-video pt-[15%] px-6 md:px-28 text-white absolute bg-gradient-to-r from-black'>
        <h1 className='text-xl  md:text-4xl font-bold w-[100%]'>{title}</h1>
        <p className='hidden md:inline-block py-3 text-[15px] w-1/4'>{overview}</p>
        <div className='flex my-4 md:m-0'>
            <Link to="/watch" >
              <button className='flex items-center gap-2 bg-white hover:bg-opacity-80 text-black py-1 md:py-2 px-3 md:px-4 text-xl font-semibold rounded-lg'>
                <PiPlayFill /> <span>Play</span>
              </button>
            </Link>
            <button className='hidden md:flex items-center gap-2 bg-gray-500 hover:bg-opacity-80 mx-2 text-white py-1 md:py-2 px-3 md:px-4 text-xl font-semibold bg-opacity-50 rounded-lg'>
              <BsFillInfoCircleFill /><span>More Info</span> 
            </button>
        </div>
    </div>
  )
}

export default VideoTitle;