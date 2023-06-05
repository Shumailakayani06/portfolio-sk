import React from 'react'
import homecare from '../public/assets/homecare.png'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'
import Head from 'next/head'

const Museum = () => {
  return (
    <>
    <Head>
    <title>Portfolio | Home & Care</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10'></div>
            <Image 
            className='absolute z-1' 
            layout='fill' 
            objectFit='cover' 
            src={homecare} 
            alt="/"
             />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Home & Care</h2>
                <h3>HTML / CSS</h3>
            </div>
        </div>
       
       <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
         <div className='col-span-4'>
            <p>Project</p>
            <h2>Overview</h2>
            <p>
               I had to create a furniture website for a school project
               The aim was to create a warm home vibe when you first visit the homepage.
            </p>
            <a href='https://vigorous-darwin-b34a5d.netlify.app/'>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            </a>
      
           
         </div>
         <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
             <p className='text-center font-bold pb-2'>
                Technologies
             </p>
             <div className='grid grid-cols-1 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill  className='pr-1'/> HTML
                </p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill  className='pr-1'/> CSS
                </p>
             </div>
            </div>

         </div>
         <Link href="/#projects">
            <p className='underline cursor-pointer'>Back</p>
         </Link>
       </div>

    </div>
    </>
  )
}

export default Museum