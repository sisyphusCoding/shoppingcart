import React,{FC, ReactNode} from "react";
import Navbar from "./Navbar";
import Head from 'next/head'

interface Props {
  children:ReactNode
}

const Layout :FC<Props> = ({children}) => {
  return(
    <main
      className="
      text-zinc-600 
      gap-5
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
          rounded-xl shadow-xl
          flex items-center justify-center 
          grow w-full"
         >
         {children}
      </section> 
    </main>
  )
}


export default Layout
