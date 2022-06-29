import React, { FC, useState } from "react";
import Image from "next/image";
import { motion, Variant, Variants } from "framer-motion";
import { useShoppingCart } from "../context/CartContext";
interface Props {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}
const StoreItem: FC<Props> = ({ id, name, price, imgUrl }) => {
  const { getQuant, inc, dec, remove } = useShoppingCart();

  const quantity = getQuant(id);

  let isZero = quantity === 0;

  

  return (
    
    <motion.section 
      className=" 
      bg-zinc-100
      border-2 border-zinc-800
      hover:shadow-[15px_15px_15px_5px_#71717a]
      shadow-[15px_15px_5px_-5px_#71717a]
      transition-all ease duration-300
      flex flex-col
      text-xs md:text-base
      lg:w-fit w-[70vmin] md:w-[40vmin] "
    >
      <div 
        className="w-full overflow-hidden max-h-[40vmin] lg:h-auto lg:w-[30vmin] border-b-2 border-zinc-800">
        <Image
          
          layout="responsive"
          objectFit="cover"
          src={imgUrl}
          height={250}
          width={300}
          alt={name}
        />
      </div>

      <div
        className="
        border-zinc-800
        flex flex-col items-center justify-between
        grow"
      >
        <div
          className="
            capitalize          
            p-3
            border-b-2 border-zinc-800
            flex w-full justify-between items-center"
        >
          <h3>{name}</h3>
          <h3 className="font-semibold">
            <span className="text-xs">$</span>
            {price}
          </h3>
        </div>

        <div className="w-full md:text-base text-xs">
          <motion.button
            key={isZero.toString()}
            initial={{ height: 0 }}
            animate={{ height: "fit-content" }}
            className={`
            cursor-pointer
            bg-sky-800
            text-zinc-200
            flex items-center
            outline-zinc-800 outline outline-2
            capitalize w-full `}
          >
            {quantity < 1 ? (
              <h3
                className="
                ease duration-300 transition-colors
                md:p-3 py-2 w-full bg-transparent hover:bg-sky-600"
                onClick={() => inc(id)}
              >
                add to cart
              </h3>
            ) : (
              <div className="flex w-full justify-between  relative">
                <h5
                  className={` 
                  hover:bg-sky-600   
                  transition-colors ease duration-300
                  w-3/12
                  border-zinc-900  
                  border-r-2 h-full md:p-3 py-2`}
                  onClick={() => dec(id)}
                >
                  -
                </h5>
                <h1 className="grow md:p-3 py-2">
                  <motion.span>{quantity}</motion.span>
                </h1>
                <h5
                  className="
                  hover:bg-sky-600   
                  transition-colors ease duration-300
                  w-3/12
                md:p-3 py-2 border-l-2 border-zinc-900"
                  onClick={() => inc(id)}
                >
                  +
                </h5>

                <div
                  onClick={() => remove(id)}
                  style={{ transformOrigin: "left" }}
                  className={`
                  transform-cpu
                  ${isZero ? "scale-x-0" : "scale-x-100"}
                  grid place-content-center
                  h-full
                  text-xs
                  font-mono
                  transition-all ease duration-200
                  shadow-[1px_1px_0_black]
                  hover:shadow-[5px_5px_0_black]
                  w-fit 
                  px-2 bg-red-600
                  absolute -right-7 `}
                >
                  <span>X</span>
                </div>
              </div>
            )}
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default StoreItem;
