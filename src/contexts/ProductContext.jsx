import React, { createContext, useContext, useState } from "react";
// import { mockCartData } from "../apis/mock-data";
import { mockProductData } from "../apis/mock-data";
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const isExisting = prevCart.some((item) => item.id === product.id);
      if (isExisting) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: product.quantity }];
    });
  };
  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };

  const [products, setProducts] = useState(mockProductData);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        cart,
        addToCart,
        updateCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
