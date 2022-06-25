import React,{FC, useState} from "react";
import { useShoppingCart } from "../context/CartContext";

import {formatCurrency} from '../utils/formatCurrenct'

import dataItems from '../data/coffee.json'

import CartItem from'./CartItem'


interface Props {
  isOpen:boolean
}

const Cart:FC<Props> = ({isOpen}) => {

    const {closeCart,items,cartQuantity} = useShoppingCart()

    

  return(
    <section
     className={`  
      ${isOpen? 'scale-x-100':'scale-x-0'}
      text-white
      z-40
      min-h-screen md:min-w-[80vmin]
      lg:min-w-[60vmin]
      min-w-[70vmin]
      max-h-screen
      bg-zinc-900
      flex flex-col 
      items-center justify-between
      absolute top-0 right-0`}
      >
      <div
       className="
        p-5
        border-b-2 border-white
        font-semibold text-xl lg:text-2xl
        min-w-full flex items-center justify-between"
       >
        <h1 
         className="" 
         >Cart</h1>
        <h5 
          onClick={()=>closeCart()}
          >X</h5>


      </div>

      <div 
        className="
        overflow-scroll
        px-5
        border-yellow-50 border-2
        min-w-full
        h-full
        grow items-center justify-evenly flex flex-col">

              {items.map(item=>(  
                <CartItem key={item.id} {...item}/>
              ))}

        </div>


    <h1
      className="p-5 font-semibold text-xl lg:text-2xl"       
      >
        <span>Total:{" "}</span>
        <span>

          ${items.reduce((total,CartItem)=>{
                const item = dataItems.find(i=>i.id===CartItem.id)
                return total + (item?.price || 0) * CartItem.quantity
          },0)}


        </span>

      </h1>
    </section>
  )
}


export default Cart
