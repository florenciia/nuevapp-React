import React, { useContext } from 'react';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import {ItemCount} from '../ItemCount/ItemCount';
import { CartContext } from '../CartContext/CartContext'


const ItemDetail = ({titulo,precio,img,stock}) => {
    
    const {addItemsToCart, productsCount} = useContext(CartContext);

    const onAdd = (e) => {
        addItemsToCart({titulo,precio,img,stock},e)
    }

    return (
        <div className='muestraPerfumesDetail'>
            {/* <p className='id'> id: {id} </p>  */}
            <h1 className='titulo'> {titulo} </h1>
             <div className='img-div'>
               <img className='imgg' src={img} alt='images'/>
             </div>

            <p className='precio'> Precio: {precio} </p>
            
            <p className='stock'> Stock: {stock}</p>
            
           <ItemCount initial={0} stock={15} onAdd={(e) => onAdd(e)}/> 


            {productsCount > 0 ? (
                <>
                        <Link to={`/Cart`}> 
                            <button className='alineacion btn-add-final'> Finlizar Compra </button> 
                        </Link>
                </>
            ): <> </>}
            
         

                <div className='btn-volver'>
                    <Link to={`/`}>
                        <br/>
                        <button className='volver'> Todos los perfumes </button>
                    </Link>
                </div>
                
        </div>
         
    )
}          
export default ItemDetail;
