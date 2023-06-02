import React from 'react'
import Image from 'next/image'
import profile from '../public/assets/profile.jpeg'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4' >Who I Am</h2>
                <p className='py-2 text-gray-600' >
                I am a positive, enthusiastic and competent Frontend Developer graduated from Noroff-School of Technology and Digital Media in 2022.
                im just testing some stuff right now
                </p>
                <p className='py-2 text-gray-600'>
                 In 2017, i started a self-employed business in the Beauty industry, where i felt the need for the modren skills of the web industry to project, promote and enhance these types of businesses.
                 This idea developed tremendous interest and understanding of how much i wanted to become a part of this ever developing industry.
                </p>


  
                <p className='py-2 text-gray-600'>
                Over the years my interest kept on developing for software development.
                In 2020 i decided to start my career as a Frontend developer and i started my education at Noroff-School of Technology and Digital Media. 
                I am very passionate about developing and learnig more everyday! In my spare time, I spend a lot of time doing various types of online crash courses.
                I am studying Back-end on my own as my goal is to become a full stack developer. 
                </p>
                <Link href="/#projects"><p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p></Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300' >
                <Image 
                 src={profile}
                 alt='/'
             
                 />
            </div>
        </div>
    </div>
  )
}

export default About