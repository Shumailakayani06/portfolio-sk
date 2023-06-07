import React from 'react'
import Image from 'next/image'
import loveGreen from '../public/assets/lovegreen.png'
import beautyStore from '../public/assets/beautystore.png'
import homecare from '../public/assets/homecare.png'
import rainy from '../public/assets/rainyDays.png'
import jsCa from '../public/assets/jscaImg.png'
import pokedex from '../public/assets/pokedex.png'
import Link from 'next/link'
import ProjectItem from './ProjectItem'
import memorycard from '../public/assets/memory.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full mt-20'>
        <div className='max-w-[1240px] mx-auto px-2 pt-16 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2>What I Have Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem 
              title='Pokedex' 
              backgroundImg={pokedex} 
              projectUrl='/pokedex'
              />
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
              title='Home & Care' 
              backgroundImg={homecare} 
              projectUrl='/homecare'
              />
                <ProjectItem 
              title='Memory Card Game' 
              backgroundImg={memorycard} 
              projectUrl='/memorycard'
              />
            </div>
        </div>
    </div>
  )
}

export default Projects