import React , {createContext, FC, useContext , ReactNode, useState} from "react";


interface Props {
  children:ReactNode
}

interface CartProps {
  getQuant:(id:number) => number
  inc:(id:number) => void
  dec:(id:number)=>void
  remove:(id:number)=>void
}

interface CartItem {
  id:number
  quantity:number
}

const CartContext = createContext({}as CartProps)

export function useShoppingCart () {
  return useContext(CartContext)
}


export function CartProvider({children}:Props) {

  const[items,setItems] = useState<CartItem>([])



  function getQuant (id:number) {
    return items.find(item =>item.id ===id)?.quantity || 0
  }


  return(
    <CartContext.Provider value={{}}>
      {children}
    </CartContext.Provider>
  )
}
