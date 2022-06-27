import React, { FC, useEffect, useState } from "react";
import { useShoppingCart } from "../context/CartContext";

import { formatCurrency } from "../utils/formatCurrenct";

import dataItems from "../data/coffee.json";
import { AnimatePresence, motion } from "framer-motion";
import CartItem from "./CartItem";
import { Variants } from "framer-motion";
import { isTemplateMiddle } from "typescript";

interface Props {
  isOpen: boolean;
}

const Cart: FC<Props> = ({ isOpen }) => {
  const { closeCart, items, cartQuantity } = useShoppingCart();

  useEffect(() => {
    if (cartQuantity === 0) {
      closeCart();
    }
  });

  const cartWrap: Variants = {
    hidden: { scaleX: 0 },
    show: { scaleX: 1, transition: { staggerChildren: 0.1 } },
    exit: {
      scaleX: 0,
      transition: {
        when: "afterChildren",
        staggerDirection: -1,
        staggerChildren: 0.05,
        ease: "circIn"
      }
    }
  };

  const childWrap: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1, ease: "circOut" } },
    exit: { opacity: 0, transition: { duration: 1, ease: "circOut" } }
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {isOpen ? (
        <div className="absolute top-0 right-0 min-h-screen min-w-[100vw] flex items-center justify-between">
          <motion.div
            onClick={() => closeCart()}
            variants={childWrap}
            initial="hidden"
            animate="show"
            exit="exit"
            className="
    bg-opacity-80        
    backdrop-blur-md
    grow min-h-screen bg-zinc-900 z-20"
          />

          <motion.section
            style={{ transformOrigin: "right" }}
            variants={cartWrap}
            initial="hidden"
            animate="show"
            exit="exit"
            className=" 
      z-40
      min-h-screen md:min-w-[60vmin]
      lg:min-w-[70vmin]
      min-w-full
      max-h-screen
      bg-slate-300
      flex flex-col 
      items-center justify-between
      absolute top-0 right-0"
          >
            <motion.div
              variants={childWrap}
              className="
        bg-zinc-200
        px-5
        border-b-2 border-zinc-600
        font-semibold text-xl lg:text-2xl
        min-w-full flex items-center justify-between"
            >
              <h1 className="py-5 text-xl lg:text-2xl">Cart</h1>
              <h5
                className="
          cursor-pointer
          hover:text-zinc-300
          transition-all ease duration-300     
          shadow-[2px_2px_0_grey]     
          hover:shadow-[5px_5px_0_grey]
          hover:bg-zinc-500     
          border-2 border-zinc-600 px-2 "
                onClick={() => closeCart()}
              >
                X
              </h5>
            </motion.div>
            <div
              className="
        overflow-scroll
        px-5 
        min-w-full
        h-full
        py-10    
        gap-10
        grow items-center justify-start flex flex-col"
            >
              {items.map((item, index) => (
                <motion.div
                  variants={childWrap}
                  key={item.id}
                  className="w-full md:px-10"
                >
                  <CartItem id={item.id} quantity={item.quantity} />
                </motion.div>
              ))}
            </div>

            <motion.h1
              variants={childWrap}
              className="
        bg-zinc-200
        border-t-2 border-zinc-600      
        min-w-full
        flex items-end  justify-end gap-2
        p-5 font-semibold text-xl lg:text-2xl"
            >
              <span className="text-lg lg:text-xl">Total:{""}</span>
              <motion.span>
                $
                {items.reduce((total, CartItem) => {
                  const item = dataItems.find(i => i.id === CartItem.id);
                  return total + (item?.price || 0) * CartItem.quantity;
                }, 0)}
              </motion.span>
            </motion.h1>
          </motion.section>
        </div>
      ) : null}
    </AnimatePresence>
  );
};

export default Cart;
