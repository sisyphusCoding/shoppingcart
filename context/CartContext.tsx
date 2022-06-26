import React, {
  createContext,
  FC,
  useContext,
  ReactNode,
  useState
} from "react";
import Cart from "../components/Cart";

import { useLocalStorage } from "../hooks/useLocalStorage";

interface Props {
  children: ReactNode;
}

interface CartProps {
  isOpen:boolean
  openCart: () => void;
  closeCart: () => void;
  getQuant: (id: number) => number;
  inc: (id: number) => void;
  dec: (id: number) => void;
  remove: (id: number) => void;
  cartQuantity: number;
  items: CartItem[];
}

interface CartItem {
  id: number;
  quantity: number;
}

const CartContext = createContext({} as CartProps);

export function useShoppingCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: Props) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function getQuant(id: number) {
    return items.find(item => item.id === id)?.quantity || 0;
  }

  function inc(id: number) {
    setItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function dec(id: number) {
    setItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id);
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function remove(id: number) {
    setItems(currItems => {
      return currItems.filter(item => item.id !== id);
    });
  }

  const cartQuantity = items.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setIsOpen(true);

  const closeCart = () => setIsOpen(false);

  return (
    <CartContext.Provider
      value={{
        isOpen,
        getQuant,
        inc,
        dec,
        remove,
        items,
        cartQuantity,
        openCart,
        closeCart
      }}
    >
      {children}
      <Cart isOpen={isOpen} />
    </CartContext.Provider>
  );
}
