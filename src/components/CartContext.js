import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const isProductInCart = cart.some((item) => item.id === product.id);
    if (!isProductInCart) {
      // If not already in cart, add the product
      setCart([...cart, product]);
    } else {
      // If already in cart, display a message or handle it as required
      console.log(`${product.name} is already in the cart.`);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
