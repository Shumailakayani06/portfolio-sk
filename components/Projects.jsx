import React from 'react'
import Image from 'next/image'
import loveGreen from '../public/assets/lovegreen.png'
import beautyStore from '../public/assets/beautystore.png'
import museum from '../public/assets/museum.png'
import rainy from '../public/assets/rainyDays.png'
import Link from 'next/link'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2>What I Have Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
             <ProjectItem 
              title='Love & Green' 
              backgroundImg={loveGreen} 
              projectUrl='/lovegreen'
              />
                  <ProjectItem 
              title='Beauty Store' 
              backgroundImg={beautyStore} 
              projectUrl='/beautystore'
              />
                  <ProjectItem 
              title='Community Museum' 
              backgroundImg={museum} 
              projectUrl='/museum'
              />
                  <ProjectItem 
              title='Rainy Days' 
              backgroundImg={rainy} 
              projectUrl='/rainyDays'
              />
            </div>
        </div>
    </div>
  )
}

export default Projects