import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    
    const [CartProducts, setCartProducts] = useState([]);
    const [productsCount, setProductsCount] = useState(0);

    const addItemsToCart = (item,quantity)=>{
        if (CartProducts.some(product => product.id === item.id)) {
            const copyPaste = [...CartProducts];
            const prodIndex = CartProducts.findIndex(product => product.id === item.id);
            copyPaste[prodIndex]={
                ...copyPaste[prodIndex],
                quantity: copyPaste[prodIndex].quantity + quantity,
            };
            setCartProducts(copyPaste);
            setProductsCount(prev => prev + quantity)
        
        }else{
            
            setCartProducts([...CartProducts,{...item,quantity}])
            setProductsCount(prev => prev + quantity)}
            
    }


    const removeItems = (item) =>{

        const removed = CartProducts.filter(prod => prod.id === item.id)
         setCartProducts(removed)
        
     }



    return(
        <CartContext.Provider value={{CartProducts,productsCount,addItemsToCart,removeItems}}>{children}</CartContext.Provider>
    )
}

