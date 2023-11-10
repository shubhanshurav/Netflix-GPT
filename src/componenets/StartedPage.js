import React from 'react';
import { BG_URL } from '../utils/constants';
import {Link} from 'react-router-dom';

const StartedPage = () => {
    
  return (
    <div className='bg-gray-800'>
        <div className='h-fit md:h-screen object-cover' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${BG_URL})`}}>
            <div className='flex justify-between px-4 md:px-20 py-4 items-center'>
                <img src='./assets/Netflix_Logo.png' alt='netflixlogo' className='w-36 md:w-48' />
                <div className=''>
                   <Link to='/login' >
                      <button className='bg-red-600 text-white px-4 py-2 text-lg rounded-md' type='button'>Sign In</button>
                   </Link>
                </div>
            </div>
            <div>
                <div className='text-white text-center mt-auto md:mt-32 my-4'>
                    <h1 className='text-3xl md:text-6xl font-bold mt-8 md:mt-0'>Enjoy big movies, hit series</h1>
                    <h1 className='text-3xl md:text-6xl font-bold my-2'>and more from ₹ 149.</h1>
                </div>
                <div className='text-white text-center text-lg md:text-2xl font-semibold'>
                    <p className='my-2'>Join today. Cancel anytime.</p>
                    <p className='my-2 px-3 md:px-28'>Ready to watch? Enter your email to create or restart your membership.</p>
                </div>
                <div className='text-center my-6'>
                    {/* <input type='email' placeholder='Email address' className='px-4 text-2xl font-light bg-black text-gray-500 py-4 border border-gray-400 mx-2 w-[30%]' /> */}
                    <Link to='/login' >
                       <button className='py-2 md:py-4 mb-8 md:mb-0 px-2 text-lg md:text-2xl text-white bg-red-600 rounded-md w-[50%] md:w-[15%]' type='button'><span>Get Started</span></button>
                    </Link>
                </div>
            </div>
        </div>

        <div className='flex flex-col md:flex-row flex-wrap px-2 mt-2 gap-1 bg-black md:h-screen h-fit object-cover'>
            <div className='text-white w-[100%] md:w-[53%] m-auto pl-10 text-start'>
                <h1 className='text-4xl md:text-6xl font-bold py-8'>Enjoy on your TV</h1>
                <p className='text-2xl md:text-3xl'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div className='text-center w-[100%] md:w-[45%] m-auto'>
                <div className='absolute'>
                   <img src='./assets/StarterPage/tv1.png' alt='tvimg' className='w-full' />
                </div>
                <div className='px-14 py-14 '>
                    <video width="496" height="360" autoPlay>
                        <source src="./assets/StarterPage/video1.m4v" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>

        <div className='flex flex-col-reverse items-center md:flex-row flex-wrap px-2 gap-1 bg-black md:h-screen h-fit object-cover w-[100%]'>
            <div className='w-[100%] md:w-[50%] text-center mb-8 md:mb-0'>
                <div className='w-[100%] md:w-[70%] m-auto'>
                    <img src='./assets/StarterPage/mobile.jpg' alt='mobileImg' />
                </div>
                <div className='flex relative bg-black -mt-28 border w-[55%] md:w-[45%] m-auto border-gray-400 justify-between px-4 py-2 rounded-2xl'>
                    <div className='m-auto'>
                       <img src='./assets/StarterPage/book.png' alt='bookimg' className='w-14 h-full' />
                    </div>
                    <div className='m-auto'>
                        <p className='text-white'>Stranger Things</p>
                        <p className='text-blue-600 '>Downloading...</p>
                    </div>
                    <div className='m-auto'>
                       <img src='./assets/StarterPage/download-icon.gif' alt='downloadicon' className='w-12' />
                    </div>
                </div>
            </div>
            <div className='w-[100%] md:w-[48%] m-auto text-start pl-10 my-5 md:my-0'>
                <h1 className='text-4xl md:text-6xl font-bold text-white py-2 px-5 md:px-0'>Download your shows to watch offline</h1>
                <p className='text-2xl text-white py-4 px-5 md:px-0'>Save your favourites easily and always have something to watch.</p>
            </div>
        </div>

        <div className='flex flex-col md:flex-row flex-wrap px-2 gap-6 md:gap-1 bg-black md:h-screen h-fit object-cover'>
            <div className='text-white w-[100%] md:w-[53%] m-auto px-12 md:pl-20 text-start'>
                <h1 className='text-4xl md:text-6xl font-bold py-2 pt-12 md:pt-0'>Watch</h1>
                <p className='text-4xl md:text-6xl font-bold pb-6'>everywhere</p>
                <p className='text-2xl font-semibold'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div className='text-center w-[100%] md:w-[45%] m-auto'>
                <div className='absolute'>
                   <img src='./assets/StarterPage/tv2.png' alt='tvimg' className='w-full' />
                </div>
                <div className='pl-24 py-14 mb-6 md:mb-0'>
                    <video width="376" height="260" autoPlay>
                        <source src="./assets/StarterPage/video2.m4v" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>

        <div className='flex flex-col items-center gap-10 md:gap-1 md:flex-row flex-wrap px-2 bg-black h-fit md:h-screen object-cover w-[100%]'>
            <div className='w-[100%] md:w-[50%] text-center'>
                <div className='w-[100%] md:w-[70%] m-auto'>
                    <img src='./assets/StarterPage/children.png' alt='childrenImg' />
                </div>
            </div>
            <div className='w-[100%] md:w-[48%] m-auto text-start px-8 md:px-0'>
                <h1 className='text-4xl md:text-6xl font-bold text-white py-0 md:py-2'>Create profiles </h1>
                <h1 className='text-4xl md:text-6xl font-bold text-white py-0 md:py-2'>for kids </h1>
                <p className='text-2xl text-white py-4 mb-6 md:mb-0'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
            </div>
        </div>

        <div className='text-center text-white bg-black border border-t-gray-900 py-10'>
            <p className='text-xl'>Developed by <span className='text-red-600 font-bold'>Shubhanshu Rao✌️</span></p>
        </div>
    </div>
  )
}

export default StartedPage;