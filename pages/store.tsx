import { NextPage } from "next";
import React, { useState } from "react";
import StoreItem from "../components/StoreItem";
import { useShoppingCart } from "../context/CartContext";

import storeItems from "../data/coffee.json";

const Store: NextPage = () => {
  const { isOpen } = useShoppingCart();

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
        <div className="px-4" key={`${item}`}>
          <StoreItem {...item} />
        </div>
      ))}
    </div>
  );
};

export default Store;
