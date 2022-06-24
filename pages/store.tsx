import { NextPage } from "next";
import React from "react";
import StoreItem from "../components/StoreItem";

import storeItems from '../data/coffee.json'

const Store:NextPage = () => {
  return(
    <div
     className="
      gap-[10vmin] 
      min-w-full
      py-10 lg:px-20
      flex-wrap
      justify-between lg:items-start items-center
      flex flex-col lg:flex-row  overflow-scroll max-h-full"
      >
      {storeItems.map((item,index)=>(
            
          <div
            className="px-4"
            key={`${item}`}
            >
          <StoreItem {...item} />
            </div>
      ))}
    </div>
  )
}


export default Store
