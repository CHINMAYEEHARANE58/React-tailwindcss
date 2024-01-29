import React from 'react'
import './App.css'

const Tailwind = () => {
  return (
    <>
        <div className='w-full bg-red-600 flex justify-between px-[40px] py-[30px] text-white'>

          <div className='flex gap-[50px] items-center justify-center'>
            <h1 className='font-bold text-3xl'>Kalvium</h1>
            <ul className='flex gap-[20px]'>
              <li>About</li>
              <li>Contacts</li>
              <li>Courses</li>
            </ul>
          </div>

          <button className='border-white border-[1px] px-[20px] rounded'>Login</button>
        </div>

        <div className='w-[80%] m-auto'>
          <button className='bg-blue-500 p-[10px] text-white rounded my-[40px] font-medium px-[15px]'>Button One</button>
          <div className='bg-red-100 p-[15px] border-red-600 border-[2px] rounded text-red-800 font-normal'>
            <span className='font-bold'>Alert! </span>This is awesome!
          </div>
          <div className='shadow-2xl flex w-[45%] m-auto p-[40px] mt-[13vh] items-center'>
            <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" className='w-[15vw] h-[15vh]'/>
            <div className='p-[20px]'>
              <p className='font-bold text-[25px]'>Kalvium Store</p>
              <p className='text-gray-500'>You have a new course!</p>
            </div>
          </div>
        </div>

        <div className='bg-gray-300 text-center py-5 absolute bottom-0 w-[100%]'>
        © 2024 Copyright : Kalvium
        </div>
    </>
  )
}

export default Tailwind