import React from 'react'

const Header = () => {
  return (
    <div className='absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10'>
      <img 
        src='./assets/Netflix_Logo.png' 
        alt="Netflixlogo" 
        className='w-44'
      />
    </div>
  )
}

export default Header