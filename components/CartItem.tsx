import React, { FC } from "react";
import { useShoppingCart } from "../context/CartContext";
import storeItems from "../data/coffee.json";
import Image from "next/image";

interface cartProps {
  id: number;
  quantity: number;
}

const CartItem: FC<cartProps> = ({ id, quantity }) => {
  const { remove } = useShoppingCart();

  const item = storeItems.find(el => el.id === id);

  if (item == null) return null;

  return (
    <div
      className="
      h-[20vmin]
      md:h-[15vmin]
      relative
      hover:shadow-[7px_7px_#71717a]
      shadow-[2px_2px_0_#71717a]
      transition-all duration-500 ease
      lg:min-w-full  
      flex items-center justify-between"
    >
      <div className="h-[20vmin] md:h-[15vmin]  w-1/3 overflow-hidden border-2 border-zinc-800">
        <Image
          layout="responsive"
          objectFit="cover"
          height={200}
          width={200}
          src={item.imgUrl}
          alt={item.name}
        />
      </div>

      <div
        className="
        text-[.85rem] 
        border-t-2 border-r-2 border-b-2 border-zinc-800
        md:text-base 
        bg-zinc-200 
        h-full
        capitalize
        items-start
        flex justify-between
        flex-col        
        grow"
      >
        <div
          className="
          bg-zinc-100
          min-w-full flex justify-end border-b-2 border-zinc-800"
        >
          <button
            onClick={() => remove(id)}
            className="
          text-zinc-800
          font-bold
          capitalize
          transition-all ease duration-200
          hover:border-transparent
          text-xs
          px-4 
          hover:bg-red-400
          bg-red-600"
          >
            X
          </button>
        </div>
        <h3
          className="
          uppercase
           py-1 px-1
          text-left
          text-xs
          w-full
          font-bold"
        >
          {item.name}
        </h3>
        <h3 className="text-xs p-1 flex justify-between min-w-full">
          <span>
            {" "}
            ${item.price}
            <strong className="text-[0.6rem] px-2 font-bold">
              x{quantity}
            </strong>
          </span>
          <span>${item.price * quantity}</span>
        </h3>
      </div>
    </div>
  );
};

export default CartItem;
