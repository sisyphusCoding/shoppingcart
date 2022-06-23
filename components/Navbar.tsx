import Link from "next/link";
import React,{FC, useState,useRef, useEffect} from "react";
import{useRouter} from 'next/router'

import {BsCart3} from 'react-icons/bs'


const Navbar:FC = () => {

  const[item,setItem] = useState<number>(0)

  const router =useRouter()

  const navLink:string[] = ['/','store','about']

  const navString:string[] = ['/','/store','/about']


 

  return(
      <section
        className="
        h-16 lg:h-20
        border-b-2 border-zinc-600
        overflow-hidden
        bg-zinc-100
        items-center justify-between
        flex min-w-full
        "
        >
      <nav
       className=" 
          h-full
          rounded-xl
          flex items-center justify-center"
        >
        {navLink.map((item,index)=>(
              
        <Link
            key={item}
            href={index ===0? item: `/${item}`}>
            <a 
            className={`
            ${router.pathname === navString[index]? 
            'bg-zinc-400 text-zinc-900 focus:no-underline hover:no-underline'
            :'no-underline'}
             px-4 h-full
            lg:text-lg  
            border-r-2 border-zinc-600
            focus:outline-none grid place-content-center
            focus:underline hover:underline
             underline-offset-8 decoration-fuchsia-800
            capitalize transition-all ease-out duration-500 -tracking-wider`}
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
