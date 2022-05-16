import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
// import cart from '../CartWidget/cart.svg';
import './CarritoFinal.css';

export const CarritoFinal = () =>{
    const {cartProducts,removeItems} = useContext(CartContext);

return (
    <>

        {cartProducts.length === 0 ? (<h2 className="titulito">There are no products!</h2>) :(cartProducts.map((prod)=>{
            
                        return(
                            <div className="compraFinal"> 
                                <h1 className="titulito"> Check Out </h1>
                                {/* <img src={cart} alt="img" /> */}
                                <h2>{prod.titulo}</h2>
                                <h3>{prod.quantity}</h3>
                                    <button className="btn-add" onClick={(prod)=>removeItems(prod)}> Eliminar producto</button>
                            </div>                            
                        )
                
                    }
                )
            )
        }
        
    </>
)
}