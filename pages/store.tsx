import { NextPage } from "next";
import React, { useState } from "react";
import StoreItem from "../components/StoreItem";
import { useShoppingCart } from "../context/CartContext";
import{motion,Variants} from 'framer-motion'
import storeItems from "../data/coffee.json";

const Store: NextPage = () => {
  const { isOpen } = useShoppingCart();

  const storeItem:Variants = {
    hidden:{y:'100vh',opacity:0},
    animate:{opacity:1,y:'0vh',transition:{
        ease:'circOut' , duration:1.2
      }},
    exit:{opacity:0,y:'100vh',transition:{duration:.8}}
  }
  return (
    <div
      className={`
      z-10
      gap-[10vmin] 
      min-w-full
      min-h-full
      lg:py-10 lg:px-20
      py-5
      flex-wrap
      justify-between lg:items-start items-center
      flex flex-col lg:flex-row `}
    >
      {storeItems.map((item, index) => (
        <motion.div 
      variants={storeItem}
          className="px-4" key={`${item}`}>
          <StoreItem {...item} />
        </motion.div>
      ))}
    </div>
  );
};

export default Store;
