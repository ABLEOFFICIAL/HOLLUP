import React from 'react'

const pageX = () => {
  return (
    <div className='flex flex-col h-full justify-between items-center p-2'>
        <div className='h-[5%]'>
          <img className='w-8' src="/src/assets/logo-black.png" alt='logo' />
        </div>

        <div className='-[90%] flex justify-center items-start flex-col p-2'>
          <h1 className='font-bold text-2xl w-[90%] mb-4'>See what's happening in the world right now</h1>
          <button className='font-bold text-xs w-full bg-[#3665f5] rounded-full p-2 text-white'>create account</button>
        </div>

        <div className='h-[5%] text-xs self-start'>
          <p>Have an account already? <a className='text-[#2954d6]' href='#'>Log in</a></p>
        </div>
    </div>
  )
}

export default pageX