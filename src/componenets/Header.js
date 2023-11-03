import React from 'react'

const Header = () => {
  return (
    <div className='absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img 
        src='./assets/Netflix_Logo.png' 
        alt="Netflixlogo" 
        className='w-44'
      />
      <div className='flex p-2 items-center gap-1'>
        <img 
         src='./assets/signout.png'
         alt='Logoutimg' 
         className='w-11 h-11'
        />
        <button className='text-white font-bold'>Sign Out</button>
      </div>
    </div>
  )
}

export default Header;