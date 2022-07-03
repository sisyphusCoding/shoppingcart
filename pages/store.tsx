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
      px-12 py-6
      grid place-content-center place-items-center
      grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    
      `}
    >
      {storeItems.map((item, index) => (
        <motion.div 
        className="min-w-full md:min-h-full"  
        variants={storeItem}
         key={`${item}`}>
          <StoreItem {...item} />
        </motion.div>
      ))}
    </div>
  );
};

export default Store;
