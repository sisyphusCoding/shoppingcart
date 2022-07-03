import Link from "next/link";
import React, { FC, useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

import { BsCart3 } from "react-icons/bs";

import { Squeeze as Hamburger, Squeeze } from "hamburger-react";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useShoppingCart } from "../context/CartContext";
import { openStdin } from "process";
import { resolve4 } from "dns";

const Navbar: FC = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  const [item, setItem] = useState<number>(0);

  const router = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  let namePath = router.pathname;

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [namePath]);

  return (
    <div className=" min-w-full sticky top-0  z-10 ">
      <AnimatePresence exitBeforeEnter>
        {isOpen ? <MobileNavbar namePath={router.pathname} /> : ""}
      </AnimatePresence>

      <section
        className={`
        overflow-hidden
        h-14 lg:h-20
        border-b-2 border-zinc-900
        bg-zinc-100
        items-center justify-between
        flex min-w-full
        `}
      >
        <div
          className={`
        ${isOpen ? "border-transparent " : " border-zinc-900"}
        z-20  border-r-2
        hover:border-transparent
        transition-all ease-in duration-300
        hover:bg-zinc-400
        text-zinc-700
        bg-opacity-20
        items-center justify-center
        lg:hidden flex w-20 h-full`}
        >
          <Squeeze toggled={isOpen} toggle={setIsOpen} />
        </div>

        <nav
          style={{ transformOrigin: "top" }}
          className={`
          hidden lg:flex
          will-change-transform
          transition-all ease-[cubic-bezier(.86,-0.01,.75,.88)] duration-1000
          h-full
          z-10 
          items-center justify-center`}
        >
          {navLink.map((item, index) => (
            <Link key={item} href={index === 0 ? item : `/${item}`}>
              <a
                className={`
            ${
              router.pathname === navString[index]
                ? "bg-zinc-400 text-zinc-900 focus:no-underline hover:no-underline"
                : "no-underline"
            }
             px-4 lg:h-full
            lg:text-lg  
            lg:border-r-2 lg:border-zinc-900
            focus:outline-none grid place-content-center
            focus:underline hover:underline
             underline-offset-8 decoration-fuchsia-800
            capitalize transition-all ease-out -tracking-wider`}
              >
                <h4>{index === 0 ? "home" : item}</h4>
              </a>
            </Link>
          ))}
        </nav>
        <AnimatePresence exitBeforeEnter>
          {" "}
          {cartQuantity > 0 ? (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{
                opacity: 1,
                y: "0%",
                x: "0%",
                transition: {
                  duration: 1,
                  ease: "circOut",
                  staggerChildren: 0.5,
                  delayChildren: 0.5
                }
              }}
              exit={{
                opacity: 0,
                x: "100%",
                transition: {
                  when: "afterChildren",
                  duration: 2,
                  ease: "circIn"
                }
              }}
              className="
            overflow-hidden
          h-full w-20 max-h-full min-h-full
          flex flex-col items-center justify-between
          border-l-2 border-zinc-600
          bg-zinc-300 relative"
            >
              <motion.div
                className="h-full max-h-full p-1"
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: "0%" }}
                exit={{
                  opacity: 0,
                  y: "-100%",
                  transition: { duration: 1, ease: "circIn" }
                }}
                transition={{ duration: 0.6, ease: "circOut" }}
              >
                <BsCart3
                  onClick={() => openCart()}
                  className=" 
            cursor-pointer
            transition-all ease duration-300
            hover:opacity-25     
            lg:text-4xl text-3xl grow "
                />
              </motion.div>
              <motion.h5
                key={cartQuantity}
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: "100%",
                  transition: { duration: 1, ease: "circIn" }
                }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="
          w-full
          text-xs md:text-base
          text-center
          text-white
          font-bold 
          bg-zinc-500"
              >
                {cartQuantity}
              </motion.h5>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </section>
    </div>
  );
};

interface Props {
  namePath: string;
}

const MobileNavbar: FC<Props> = ({ namePath }) => {
  let parent: Variants = {
    hidden: { x: '-100%' },
    animate: {
      x:'0%',
      transition: {
        staggerChildren: 0.35,
        delayChildren:.45,
        ease:'circOut',
        duration:1 
      }
    },
    exit: {
      x:'-100%',
      transition: {
        ease: "circOut",
        duration: 1.2,
        staggerChildren: 0.2,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  let child: Variants = {
    hidden: { opacity: 0 },
    animate: { opacity: 1},
    exit: { opacity: 0 }
  };

  return (
    <motion.nav
      variants={parent}
      initial="hidden"
      animate="animate"
      exit="exit"
      style={{ transformOrigin: "top" }}
      className="
      bg-black
      lg:hidden
      absolute  top-14 lg:top-20 left-0 z-10
      px-20 py-52 gap-8
      min-h-screen min-w-full flex flex-col items-start justify-start"
    >
      {navLink.map((item, index) => (
        <Link key={item} href={index === 0 ? item : `/${item}`}>
          <motion.a
            variants={child}
            key={index}
            className={`
            cursor-pointer
            ${
              namePath === navString[index]
                ? "bg-zinc-400 text-zinc-900 focus:no-underline hover:no-underline"
                : "no-underline  hover:bg-zinc-900   focus:bg-zinc-900"
            }
             px-4 lg:h-full
            text-4xl 
            w-full
            lg:border-r-2 lg:border-zinc-600
            rounded-lg
            focus:outline-none flex items-start
             underline-offset-8 decoration-fuchsia-800
            capitalize transition-all ease-out -tracking-wider`}
          >
            <h4>{index === 0 ? "home" : item}</h4>
          </motion.a>
        </Link>
      ))}
    </motion.nav>
  );
};

const navLink: string[] = ["/", "store", "about"];

const navString: string[] = ["/", "/store", "/about"];

export default Navbar;
