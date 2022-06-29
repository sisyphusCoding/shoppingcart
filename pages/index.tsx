import type { NextPage } from 'next'
import {SiBuymeacoffee} from 'react-icons/si'
import Link from 'next/link'
import { useEffect, useState } from 'react'
const Home: NextPage = () => {

 const[video,setVideo]= useState<boolean>(true) 
console.log(video)
  useEffect(()=>{
    console.log('after:' , video)
  },[video])

  return (
    <div className='
      min-h-full min-w-full
      flex  lg:items-center items-start justify-end'>
    <section 
        className='
        text-[rgba(255,255,255,0.65)]
        hover:bg-opacity-10
        lg:bg-opacity-100 bg-opacity-40
        transition-all ease duration-300
        text-zinc-200
        px-10
        bg-black z-10 backdrop-filter backdrop-blur-md
        w-full h-1/2 
        lg:h-full lg:w-fit flex flex-col items-center justify-evenly'>
    <h1 
     className=' 
      tracking-tighter
        w-full 
        drop-shadow-[0_5px_5px_rgba(0,0,0,.7)] 
        flex-col flex
        text-[clamp(1.2rem,1.2rem+8vmin,8rem)]
          '>
           <span
            className='
            uppercase
            z-40
            filter
             right-0  mix-blend-color-dodge'
             >caffeined</span> 
           <span
            className='lg:text-xl md:text-lg text-xs w-full text-right tracking-tighter'
             >
             – we&apos;ve got your <strong className='text-yellow-400' >morning</strong> covered.
          </span> 
      </h1>
      

  <button 
      className='
        border-2 
        border-transparent
        hover:border-zinc-500 
        bg-zinc-800 bg-opacity-80
        shadow-2xl
        z-10 rounded-xl  px-4 py-1' 
      >
    <Link
       href={'/store'}>
      <a 
      className=' 
          flex items-center justify-center'
        >
          <SiBuymeacoffee 
            className='   
            text-[clamp(.8rem,.8rem+6vmin,6rem)]
            ' />
            <h4 
            className='
            text-left
            text-[clamp(.6rem,.6rem+1.7vmin,2rem)]'
             >Buy our <br/> best sellers</h4>
        </a>
    </Link>
        </button>
      </section>
      {video?  
       
      <div
        className='
          backdrop-filter
          bg-black bg-opacity-90 backdrop-blur-2xl
         flex items-center justify-center 
        z-10
        absolute top-0 left-0
        min-h-screen min-w-full'>
          <div 
           className='
            loader
            motion-safe:animate-spin 
           rounded-full
           h-20 w-20'/>

          
      </div>:null }

     <video
        onCanPlay={()=>setVideo(false)}
        autoPlay loop muted playsInline 
      className=' top-0 left-0 h-full w-full object-cover z-0 absolute'>
        <source 
          src='/coffee.mp4'/>
      </video>
   </div>
  )
}

export default Home
