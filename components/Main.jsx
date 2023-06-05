import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
              <p className='uppercase text-sm tracking-widest text-gray-600'>Lets Build Something Together</p>
              <h1 className='py-4 text-gray-700'>
                  Hi, I am <span className='text-[#5651e5]'>Shumaila</span>
              </h1>
              <h1 className='py-2 text-gray-700'>A Front-End Developer</h1>
              <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                  I am a Back End web developer specializing in building exceptional digital experiences.
                  Currently, I am focused on building responsive Front End web applications while learning back-end technologies.
              </p>
              <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <Link href='https://www.linkedin.com/in/shumaila-kayani-556aa717a/'><FaLinkedinIn /></Link>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                     <Link href='https://github.com/Shumailakayani06'><FaGithub /></Link> 
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                     <Link href='mailto:shumailakayani059@gmail.com'><AiOutlineMail /></Link>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                     <BsFillPersonLinesFill />
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Main