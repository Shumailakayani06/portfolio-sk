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
                I am a positive, enthusiastic and competent Backend Developer graduated from Noroff-School of Technology and Digital Media, and Brights learing JavaScript program in 2023.
                
                </p>
                <p className='py-2 text-gray-600'>
                 In 2017, i started a self-employed business in the Beauty industry, where i felt the need for the modren skills of the web industry to project, promote and enhance these types of businesses.
                 This idea developed tremendous interest and understanding of how much i wanted to become a part of this ever developing industry.
                </p>


  
                <p className='py-2 text-gray-600'>
                I decided to take a crash course where i learned basic HTML, CSS and JavaScript.
                What i thougth was just a basic crash course with a few small edits turned into love for programming.
                Fascinated with how intricate programming can be I was quickly drawn to learn more.
                In 2020 i decided to start my career as a Backend Developer and i started my education at Noroff-School of Technology and Digital Media where i studied Front End Development.
                After completing my education i took a 12-week intense JavaScript Course from Brights Learing and gained tremendous of new interesting knowledge.
                I am very passionate about developing and learnig more everyday! In my spare time, I spend a lot of time doing various types of online crash courses and building projects with React JS and learing new technologies.
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