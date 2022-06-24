import React,{FC, ReactNode, useEffect, useState} from "react";
import Navbar from "./Navbar";
import Head from 'next/head'
import{motion,AnimatePresence, Variants, animate} from 'framer-motion'
import { Router, useRouter } from "next/router";
import { exit } from "process";
interface Props {
  children:ReactNode
}

const Layout :FC<Props> = ({children}) => {

  let router = useRouter()

  let curtain:Variants ={
    hidden:{translateY:'-100%'},
    animate:{translateY:['-100%','0%','100%'],transition:{duration:1.5,ease:'circOut'}},

  }

  let blink:Variants ={

    hidden:{opacity:0},
    animate:{opacity:[0,0,1],transition:{duration:1.5,ease:'circIn'}},
  }


  return(
    <main
      className="
      text-zinc-600 
      relative 
      bg-zinc-300
      min-h-screen min-w-full 
      flex flex-col items-center justify-between"
      >
      <Head>
        <title>Shopping Cart</title>
        <meta name="description" content="shopping cart using next" />
        <link rel="icon" href="/favicon.ico" />   
      </Head>
      <Navbar/>
      <section
          className=" 
          relative
          overflow-hidden
          flex items-center justify-center 
          grow w-full"
         >
        <motion.div 
          key={router.pathname}
          variants={curtain}
          initial='hidden' animate='animate'
         className="
          lg:flex hidden
            z-[5]
          bg-black bg-opacity-80 backdrop-filter backdrop-blur-sm
          h-full w-full absolute ">

        </motion.div>
       <motion.div 
        className="z-[2]"
          variants={blink}
          key={router.pathname}
          initial='hidden' animate='animate'
            transition={{delay:1.5}}
          >
         {children}
      </motion.div> 
      </section> 
    </main>
  )
}


export default Layout
