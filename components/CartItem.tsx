import React, { FC } from "react";
import { useShoppingCart } from "../context/CartContext";
import storeItems from "../data/coffee.json";
import Image from "next/image";

interface Props {
  id: number;
  quantity: number;
}

const CartItem: FC<Props> = ({ id, quantity }) => {
  const { remove } = useShoppingCart();

  const item = storeItems.find(el => el.id === id);

  if (item == null) return;

  return (
    <div
      className="
      overflow-hidden
      h-[18vmin]
      border-2 border-zinc-300 
      min-w-full
      flex items-center justify-between"
    >
      <div className="w-1/3  block h-full">
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
        h-full
        capitalize
        p-3
        items-start
        flex justify-evenly
        flex-col
        grow"
      >
        <h3>{item.name}</h3>
        <h3>
          ${item.price} X {quantity} = ${item.price * quantity}
        </h3>
        <button
          onClick={() => remove(id)}
          className="
          capitalize
          transition-all ease duration-200
          border-2 border-red-500
          hover:border-white
          hover:shadow-[2px_2px_0_white]
          shadow-[2px_2px_0_red]
          text-xs
          py-1
          px-2
          bg-red-600"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
