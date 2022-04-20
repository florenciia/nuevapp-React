import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

export const Cart = ({img,titulo,tipo,precio}) =>{
    const {cartProducts,removeItems} = useContext(CartContext);
    const listaDeTotales = [];

return (
    <>
        {cartProducts.length === 0 ? (<h2>No hay productos agregados!</h2>) : (cartProducts.map((prod)=>{
                        
                        const total = prod.precio * prod.quantity
                        listaDeTotales.push(total);

                        return(
                            <div className="compraFinal"> 
                            <h1> Detalle de tu compra </h1>
                                <img src={prod.img} alt="img" />
                                <h2>{prod.titulo}</h2>
                                <h2>{prod.tipo}</h2>
                                <h3>{prod.quantity}</h3>
                                <p>${prod.precio}</p>
                                <p>${total}</p>
                                <button className="btn-add" onClick={()=>removeItems(prod.id)}> Eliminar producto</button>
                            </div>
                        )
                
                    }
                )
            )
        }
        
    </>
)
}