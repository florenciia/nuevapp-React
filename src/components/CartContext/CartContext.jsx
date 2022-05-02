import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    
    const [CartProducts, setCartProducts] = useState([]);

    const addItemsToCart = (item)=>{

        if (CartProducts.some(product => product.id === item.id)) {

        //     setCartProducts(CartProducts.map( product => product.id === item.id ?
        //         {...product, quantity: product.quantity + item.quantity} :
        //         product));
           
        
        // }else{
            
            setCartProducts([...CartProducts,{...item}]);
            
    }
}

    const removeItems = (item) =>{

        const removed = CartProducts.filter(prod => prod.id === item.id)
         setCartProducts(removed)
        
     }

    return(
        <CartContext.Provider value={{CartProducts,addItemsToCart,removeItems}}>{children}</CartContext.Provider>
    )

}