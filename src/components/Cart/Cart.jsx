import React, { useContext } from "react";
import './Cart.css';
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

export const Cart = () =>{
    const {CartProducts,removeItems} = useContext(CartContext);
    let listaDeTotales = [];

    return (
        <>
            {CartProducts.length === 0 ? (
                <>
                    <h2 className="noHayProd"> There are no products!</h2>

                    <div className='btn-volver'>
                        <Link to={`/`}>
                            <button className='volver'> Choose my perfume! </button>
                        </Link>
                    <br/>
                    <br/>
                    <br/>
                        <Link to={`/category/kids`}>
                            <button className='volverA'> About kids </button>
                        </Link>

                        <Link to={`/category/men`}>
                            <button className='volverA'> About mens </button>
                        </Link>

                        <Link to={`/category/women`}>
                            <button className='volverA'> About womens </button>
                        </Link>
                    </div>
                </>
               
         
            
            ) : (CartProducts.map((prod)=>{
                            
                            const total = prod.precio * prod.quantity
                            listaDeTotales.push(total);

                            return(
                                <div className="compraFinal"> 
                                        <h1> Detalle de tu compra </h1>
                                        <img src={prod.img} alt="img" />
                                        <h2>{prod.titulo}</h2>
                                        <h3>{prod.quantity}</h3>
                                        <p>${prod.precio}</p>
                                        <p>${total}</p>
                                        <button className="btn-add" onClick={()=>removeItems(prod.id)}> Eliminar producto</button>
                                        <h2> Total: ${listaDeTotales.reduce((acc,b) => acc + b, 0)}</h2>
                                </div>
                            )
                    
                        }
                    )
                )
            }
            
        </>
    )
}