import React, { useState } from 'react';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import {ItemCount} from '../ItemCount/ItemCount';


const ItemDetail = ({titulo,precio,img}) => {
    
    const {addItemsToCart, setAddItemsToCart} = useState([]);

    const agregarAlCarrito = (e) => {
        addItemsToCart({titulo,precio,img},e)
    }

    return (
        <div className='muestraServicio'>
            <h1 className='titulo'> {titulo} </h1>
             <p className='precio'> Precio: {precio} </p>
             <div className='img-div'>
               <img className='imgg' src={img} alt='images'/>
             </div>
            
           <ItemCount initial={0} stock={20} onAdd={(e) => agregarAlCarrito(e)}/> 


            {setAddItemsToCart > 0 ? (
                <>
                        <Link> 
                            <button className='btn-add-final'> Finlizar Compra</button> 
                        </Link>
                </>
            ): <> </>}
            
                <br/>

                <Link to={`/`}>
                    <button className='volver'> Todos los servicios </button>
                </Link>
        </div>
         
    )
}          
export default ItemDetail;