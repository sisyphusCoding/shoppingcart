import React, { FC, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
    <section
      className=" 
      bg-zinc-100
      border-4 border-zinc-800
      hover:shadow-[15px_15px_15px_5px_#71717a]
      shadow-[15px_15px_5px_-5px_#71717a]
      transition-all ease duration-300
      flex flex-row lg:flex-col
       lg:w-fit w-[85vmin] "
    >
      <div className="w-1/2 lg:w-[30vmin]">
        <Image
          layout="responsive"
          objectFit="cover"
          src={imgUrl}
          height={250}
          width={250}
          alt={name}
        />
      </div>

      <div
        className="
        lg:border-t-4
        lg:border-l-0
        border-l-4
        border-zinc-800
        flex flex-col items-center justify-between
        grow"
      >
        <div
          className="
            capitalize
            md:text-lg
            p-3
            border-b-4 border-zinc-800
          flex w-full justify-between items-center "
        >
          <h3>{name}</h3>
          <h3 className="font-semibold">
            <span className="text-base">$</span>
            {price}
          </h3>
        </div>

        <div className="w-full">

          <motion.button
            key={isZero.toString()}
            initial={{ height: 0 }}
            animate={{ height: "fit-content"}}
            className={`
            cursor-pointer
            bg-sky-800
            text-zinc-200
            flex items-center
            outline-zinc-800 outline outline-4
            capitalize w-full `}
          >
            {quantity < 1 ? (
              <h3 className="
                ease duration-300 transition-colors
                p-3 w-full bg-transparent hover:bg-sky-600" onClick={() => inc(id)}>
                add to cart
              </h3>
            ) : (
              <div className="flex w-full  justify-between text-lg md:text-2xl relative">
                <h5
                  className={` 
                  hover:bg-sky-600   
                  transition-colors ease duration-300
                  w-3/12
                  border-zinc-900  
                  border-r-2 h-full p-2`}
                  onClick={() => dec(id)}
                >
                  -
                </h5>
                <h1 className="grow p-2">
                    
                    <motion.span>
                    {quantity}
                    </motion.span>
                  </h1>
                <h5
                  className="
                  hover:bg-sky-600   
                  transition-colors ease duration-300
                  w-3/12
                  p-2 border-l-2 border-zinc-900"
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
    </section>
  );
};

export default StoreItem;
