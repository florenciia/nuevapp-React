import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    
    const [CartProducts, setCartProducts] = useState([]);

    const addItemsToCart = (product)=>{
      CartProducts.some(item => item.id === product.id)
          ? setCartProducts(CartProducts.map(item => item.id === product.id ? {...item, quantity: item.quantity + product.quantity} : item))
          : setCartProducts([...CartProducts, product]);
    }

    const removeItems = (id) =>{

         setCartProducts(CartProducts.filter(prod => prod.id !== id))
        
     }

    return(
        <CartContext.Provider value={{CartProducts,addItemsToCart,removeItems}}>{children}</CartContext.Provider>
    )

}