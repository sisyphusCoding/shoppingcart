import React, { FC } from "react";
import { useShoppingCart } from "../context/CartContext";
import storeItems from "../data/coffee.json";
import Image from "next/image";

interface cartProps {
  id: number;
  quantity: number;
}


const CartItem : FC <cartProps> = ({id,quantity}) => {

  const { remove } = useShoppingCart();

  const item = storeItems.find(el => el.id === id);

  if (item == null) return null

  return(
    <div
      className="
      border-2 border-zinc-800
      hover:shadow-[5px_5px_0_#71717a]
      shadow-[1px_1px_0_#71717a]
      transition-all duration-500 ease
      overflow-hidden
      h-[15vmin] 
      min-w-full
      flex items-center justify-between"
    >
      <div className="w-1/4  block h-full">
        <Image
          layout="responsive"
          objectFit="cover"
          height={200}
          width={140}
          src={item.imgUrl}
          alt={item.name}
        />
      </div>

      <div
        className="
        text-[.85rem]
        md:text-base 
        bg-zinc-200
        border-l-2 border-zinc-600
        h-full
        capitalize
        items-end
        flex justify-between
        flex-col        
        grow"
      >
        <h3
          className="
          uppercase
          px-3 py-1
          text-right
          w-full
          font-bold border-b-2 border-zinc-600"
        >
          {item.name}
        </h3>
        <h3 className="">
          ${item.price} X {quantity} = ${item.price * quantity}
        </h3>
        <button
          onClick={() => remove(id)}
          className="
          text-zinc-800
          capitalize
          transition-all ease duration-200
          hover:border-transparent
          border-2 border-red-700
          hover:shadow-[5px_5px_0_red]
          shadow-[2px_2px_0_red]
          text-xs
          py-1
          px-2
          bg-red-600"
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
