import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, Variant, Variants } from "framer-motion";
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
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const handleimageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const imgRef = useRef<HTMLDivElement>(null);

  let h, w;

  const { current: elImg } = imgRef;
  if (elImg) {
    h = elImg.clientHeight + 2;
    w = elImg.clientWidth + 2;
  }

  return (
    <motion.section
      ref={imgRef}
      className=" 
      bg-zinc-100
      border-2 border-zinc-800
      hover:shadow-[15px_15px_15px_5px_#71717a]
      shadow-[15px_15px_5px_-5px_#71717a]
      transition-all ease duration-300
      flex flex-col
      text-xs md:text-base
      lg:h-full min-w-full       "
    >
      <div
        className={`
      md:h-fit
      h-[40vmin] w-full overflow-hidden

      ${
        imageLoaded
          ? " filter-none bg-none brightness-90"
          : " blur-xl filter brightness-50"
      }
        transition-all duration-1000 ease delay-1000 
        min-w-full  border-b-2 border-zinc-800 
        `}
      >
        <Image
          onLoad={handleimageLoad}
          layout="responsive"
          objectFit="cover"
          src={imgUrl}
          height={150}
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
          <h3 className="font-semibold py-1">
            <span className="text-xs">$</span>
            {price}
          </h3>
        </div>

        <div className=" w-full md:text-base text-xs relative">
          <AnimatePresence exitBeforeEnter>
            <motion.button
              key={isZero.toString()}
              
              className={`
            h-10 md:h-12
            overflow-hidden
            -z-10
            cursor-pointer
            bg-sky-800
            text-zinc-200
            flex items-center
            outline-zinc-800 outline outline-2
            capitalize w-full `}
            >
              {quantity < 1 ? (
                <motion.h3
                  initial={{ y: "-100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "120%" }}
                  transition={{ duration: 0.65, ease: "backOut" }}
                  className="
                ease duration-300 transition-colors
                md:p-3 py-2 w-full bg-transparent"
                  onClick={() => inc(id)}
                >
                  add to cart
                </motion.h3>
              ) : (
                <div className="flex w-full justify-between relative">
                  <motion.h5
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    exit={{ x: "-120%" }}
                    transition={{ duration: 0.65, ease: "backOut" }}
                    className={` 
                  hover:bg-sky-600   
                  transition-colors ease duration-300
                  w-3/12
                  border-zinc-900  
                  border-r-2 h-full md:p-3 py-3`}
                    onClick={() => dec(id)}
                  >
                    -
                  </motion.h5>
                  <motion.h1
                    initial={{ y: "-100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "120%" }}
                    transition={{ duration: 0.65, ease: "backOut" }}
                    className="grow md:p-3 py-3"
                  >
                    <motion.span>{quantity}</motion.span>
                  </motion.h1>
                  <motion.h5
                    transition={{ duration: 0.65, ease: "backOut" }}
                    initial={{ x: "100%" }}
                    animate={{ x: "0%" }}
                    exit={{ x: "120%" }}
                    className="
                  hover:bg-sky-600   
                  transition-colors ease duration-300
                  w-3/12
                md:p-3 py-3 border-l-2 border-zinc-900"
                    onClick={() => inc(id)}
                  >
                    +
                  </motion.h5>
                </div>
              )}
            </motion.button>
          </AnimatePresence>
          <div
            onClick={() => remove(id)}
            style={{ transformOrigin: "left" }}
            className={`
                    cursor-pointer
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
                  px-2 bg-red-600 py-2
                  absolute -right-7 -top-0`}
          >
            <span>X</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default StoreItem;
