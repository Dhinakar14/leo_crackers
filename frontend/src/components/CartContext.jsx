import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [totalCount, setTotalCount] = useState(0);

  return (
    <CartContext.Provider value={{ totalCount, setTotalCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
