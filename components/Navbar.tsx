import Link from "next/link";
import React,{FC, useState,useRef, useEffect} from "react";
import{useRouter} from 'next/router'

import {BsCart3} from 'react-icons/bs'

import { Squeeze as Hamburger, Squeeze } from 'hamburger-react'

import {motion} from 'framer-motion'

const Navbar:FC = () => {

  const[item,setItem] = useState<number>(0)

  const router =useRouter()

  const navLink:string[] = ['/','store','about']

  const navString:string[] = ['/','/store','/about']

  const [isOpen,setIsOpen] = useState<boolean>(false)
 

  return(
      <section
        className="
        h-16 lg:h-20
        relative
        border-b-2 border-zinc-600
        bg-zinc-100
        items-center justify-between
        flex min-w-full
        "
        >


        <div
         className={`
        ${isOpen? 'border-transparent':'border-r-2 border-zinc-600 delay-1000'}
        z-20 
        transition-all ease duration-100
        items-center justify-center
        lg:hidden flex w-20 h-full`}>
        <Squeeze toggled={isOpen} toggle={setIsOpen} />
      </div>

      <nav
        style={{transformOrigin:'top'}}
       className={`
          ${isOpen?'scale-y-100':'scale-y-0 lg:scale-y-100'}
          will-change-transform
          transition-all ease-[cubic-bezier(.86,-0.01,.75,.88)] duration-1000
          absolute lg:relative 
          lg:h-full h-screen w-[80vw] lg:w-fit
          top-0 left-0
          bg-black lg:bg-transparent
          z-10 
          flex-col lg:flex-row
          items-start justify-start
          py-40 lg:py-0 px-20 lg:px-0
          gap-10 lg:gap-0
          flex  lg:items-center lg:justify-center`}
        >
        {navLink.map((item,index)=>(
              
        <Link
            key={item}
            href={index ===0? item: `/${item}`}>
            <a 
            className={`

            ${isOpen? 'opacity-100 delay-1000  duration-500':'opacity-0 lg:opacity-100  duration-100'}
            ${router.pathname === navString[index]?  
            'bg-zinc-400 text-zinc-900 focus:no-underline hover:no-underline'
            :'no-underline'}
             px-4 lg:h-full
            lg:text-lg  
            lg:border-r-2 lg:border-zinc-600
            focus:outline-none grid place-content-center
            focus:underline hover:underline
             underline-offset-8 decoration-fuchsia-800
            capitalize transition-all ease-out -tracking-wider`}
             ><h4 
                >{index === 0? 'home' : item}</h4></a>
        </Link>
        ))}
      </nav>


        <div 
         className=" 
          h-full w-20
          flex flex-col items-center justify-center
          border-l-2 border-zinc-600
          bg-zinc-300 relative"
         >
        <BsCart3   
            className="
          lg:text-4xl text-3xl grow p-0.5"/>
        <h5 
         className="
          w-full
          text-center
          text-white
          font-bold 
          bg-zinc-400"
         >{item}</h5>
      </div>
      </section>
  )
}


export default Navbar
