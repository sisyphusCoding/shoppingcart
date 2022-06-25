import React, { FC, ReactNode, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Head from "next/head";
import { motion, AnimatePresence, Variants, animate } from "framer-motion";
import { Router, useRouter } from "next/router";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  let router = useRouter();

  let curtain: Variants = {
    hidden: { translateY: "-100%" },
    animate: {
      translateY: ["-150%", "0%", "150%"],
      transition: { duration: 1.89, ease: "circOut" }
    }
  };

  let blink: Variants = {
    hidden: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.2, ease: "circIn" } },
    exit: { opacity: 0, transition: { duration: 1.2, ease: "circIn" } }
  };

  return (
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
      <Navbar />
      <section
        className=" 
          relative
          overflow-hidden 
          flex-col
          flex items-center justify-center 
          grow w-full"
      >
        <motion.div
          key={router.pathname}
          variants={curtain}
          initial="hidden"
          animate="animate"
          className="
          top-0 left-0
          will-change-transform
          flex 
          z-[5]
          bg-black bg-opacity-90 backdrop-filter backdrop-blur-sm
          h-full w-full absolute "
        ></motion.div>

        <AnimatePresence exitBeforeEnter>
          <motion.div
            className="z-[2] h-full w-full grow flex items-stretch justify-center"
            variants={blink}
            key={router.pathname}
            initial="hidden"
            animate="animate"
            exit="exit"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Layout;
