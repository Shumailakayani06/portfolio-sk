import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4' >Who I Am</h2>
                <p className='py-2 text-gray-600' >
                a positive, enthusiastic and competent Frontend Developer student at Noroff-School of Technology and Digital Media
                In 2017, i started a self-employed business in the beauty industry, where i felt the need for the modern skills in 
                the web industry, which could be useful to promote and project these types of businesses.
                This idea developed tremendous interest and understanding of how much i wanted to become a part of this industry.
                </p>
                <p className='py-2 text-gray-600'>
                While working in the beauty branch over the years, my interest kept on developing for software development.
                In 2020 i decided to start my career as a Frontend developer and i started my education which will be completed in June.2022.
                I am very passionate about developing and learnig more everyday! In my spare time, I spend a lot of time doing various crash courses online.
                My goal is to study Backend alongside my studies so that i can become a full stack developer! 
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300' >
                <Image 
                 src="/../public/assets/profile.jpeg"
                 alt='/'
                 width={400}
                 height={400}
                 className="rounded-xl"
                 />
            </div>
        </div>
    </div>
  )
}

export default About