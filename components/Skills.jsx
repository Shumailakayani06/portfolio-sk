import React from 'react'
import Image from 'next/image'
import html from '../public/skills/file_type_html_icon_130541.png'
import css from '../public/skills/file_type_css_icon_130661.png'
import js from '../public/skills/javascript_icon_130900.png'
import react from '../public/skills/react_original_logo_icon_146374.png'
import next from '../public/skills/nextjs_icon_213852.png'
import ts from '../public/skills/typescript.png'
import node from '../public/skills/nodejs.png'
import sass from '../public/skills/sass.png'
import tailw from '../public/skills/tailwind-css.png'
import github from '../public/skills/github.png'
import vscode from '../public/skills/visual-studio.png'
import git from '../public/skills/git.png'
import ws from '../public/skills/wordpress_logo_icon_167953.png'
import heroku from '../public/skills/heroku_icon_130912.png'
import strapi from '../public/skills/strapi_logo_icon_144838.png'
import figma from '../public/skills/figma_logo_icon_170157.png'
import postgreSQL from '../public/skills/postgresql.png'
import mongoDB from '../public/skills/mongo.png'


const Skills = () => {
  return (
    <div id='skills' className="w-full lg:h-screen p-2 my-10">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
         <p className='text-xl tracking-widest uppercase text-[#5651e5]' >Skills</p>
         <h2 className='py-4' >What I Can Do</h2>
         <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                 <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                     <div className='m-auto'>
                     <Image 
                         src={html}
                         alt='/'
                         />
                     </div>
                     <div className='flex flex-col items-center justify-center'>
                         <h3>HTML</h3>
                     </div>
                 </div>
             </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                 <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                     <div className='m-auto'>
                     <Image 
                         src={css}
                         alt='/'
                         />
                     </div>
                     <div className='flex flex-col items-center justify-center'>
                         <h3>CSS</h3>
                     </div>
                 </div>
             </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                 <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                     <div className='m-auto'>
                     <Image 
                         src={js}
                         alt='/'
                         />
                     </div>
                     <div className='flex flex-col items-center justify-center'>
                         <h3>JavaScript</h3>
                     </div>
                 </div>
             </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                 <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                     <div className='m-auto'>
                     <Image 
                         src={react}
                         alt='/'
                         />
                     </div>
                     <div className='flex flex-col items-center justify-center'>
                         <h3>React</h3>
                     </div>
                 </div>
             </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                 <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                     <div className='m-auto'>
                     <Image 
                         src={next}
                         alt='/'
                         />
                     </div>
                     <div className='flex flex-col items-center justify-center'>
                         <h3>Next.js</h3>
                     </div>
                 </div>
             </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                 <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                     <div className='m-auto'>
                     <Image 
                         src={ts}
                         alt='/'
                         />
                     </div>
                     <div className='flex flex-col items-center justify-center'>
                         <h3>TypeScript</h3>
                     </div>
                 </div>
             </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                 <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                     <div className='m-auto'>
                     <Image 
                         src={node}
                         alt='/'
                         />
                     </div>
                     <div className='flex flex-col items-center justify-center'>
                         <h3>Node.js</h3>
                     </div>
                 </div>
             </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                 <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                     <div className='m-auto'>
                     <Image 
                         src={postgreSQL}
                         alt='/'
                         />
                     </div>
                     <div className='flex flex-col items-center justify-center'>
                         <h3>PostgreSQL</h3>
                     </div>
                 </div>
             </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                 <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                     <div className='m-auto'>
                     <Image 
                         src={mongoDB}
                         alt='/'
                         />
                     </div>
                     <div className='flex flex-col items-center justify-center'>
                         <h3>Mongo DB</h3>
                     </div>
                 </div>
             </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                 <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                     <div className='m-auto'>
                     <Image 
                         src={sass}
                         alt='/'
                         />
                     </div>
                     <div className='flex flex-col items-center justify-center'>
                         <h3>SASS</h3>
                     </div>
                 </div>
             </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                 <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                     <div className='m-auto'>
                     <Image 
                         src={tailw}
                         alt='/'
                         />
                     </div>
                     <div className='flex flex-col items-center justify-center'>
                         <h3>Tailwind</h3>
                     </div>
                 </div>
             </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                 <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                     <div className='m-auto'>
                     <Image 
                         src={github}
                         alt='/'
                         />
                     </div>
                     <div className='flex flex-col items-center justify-center'>
                         <h3>Github</h3>
                     </div>
                 </div>
             </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                 <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                     <div className='m-auto'>
                     <Image 
                         src={vscode}
                         alt='/'
                         />
                     </div>
                     <div className='flex flex-col items-center justify-center'>
                         <h3>VsCode</h3>
                     </div>
                 </div>
             </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                 <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                     <div className='m-auto'>
                     <Image 
                         src={git}
                         alt='/'
                         />
                     </div>
                     <div className='flex flex-col items-center justify-center'>
                         <h3>Git</h3>
                     </div>
                 </div>
             </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                 <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                     <div className='m-auto'>
                     <Image 
                         src={ws}
                         alt='/'
                         />
                     </div>
                     <div className='flex flex-col items-center justify-center'>
                         <h3>Wordpress</h3>
                     </div>
                 </div>
             </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                 <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                     <div className='m-auto'>
                     <Image 
                         src={heroku}
                         alt='/'
                         />
                     </div>
                     <div className='flex flex-col items-center justify-center'>
                         <h3>Heroku</h3>
                     </div>
                 </div>
             </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                 <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                     <div className='m-auto'>
                     <Image 
                         src={strapi}
                         alt='/'
                         />
                     </div>
                     <div className='flex flex-col items-center justify-center'>
                         <h3>Strapi</h3>
                     </div>
                 </div>
             </div>
             <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                 <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                     <div className='m-auto'>
                     <Image 
                         src={figma}
                         alt='/'
                         />
                     </div>
                     <div className='flex flex-col items-center justify-center'>
                         <h3>Figma</h3>
                     </div>
                 </div>
             </div>
             

         </div>
      </div>
    </div>
  )
}

export default Skills