import React, { useContext, useState } from 'react';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import {ItemCount} from '../ItemCount/ItemCount';
import { CartContext } from '../CartContext/CartContext'


const ItemDetail = ({titulo,precio,img,stock}) => {
    
    const {addItemsToCart, productsCount} = useContext(CartContext);
    const [count, setCount] = useState(0);

    const onAdd = (quantity) => {
        addItemsToCart({titulo,precio,img,stock,quantity})
        setCount(count + quantity);
    }

    return (
        <div className='muestraPerfumesDetail'>
            {/* <p className='id'> id: {id} </p>  */}
            <h1 className='titulo'> {titulo} </h1>
             <div className='img-div'>
               <img className='imgg' src={img} alt='images'/>
             </div>

            <p className='precio'> Price: ${precio} </p>
            
            <p className='stock'> Stock: {stock}</p>
        

           {count <= 0 ? <ItemCount initial={0} stock={stock} onAdd={onAdd}/>
                        : 
                ( <Link to={'/cart'} className='alineacion'> <button className='btn-add-final'> Checkout </button> </Link> )
            }
            
         

                <div className='btn-volver'>
                    <Link to={`/`}>
                        <br/>
                        <br/>
                        <button className='volver'> All perfumes </button>
                    </Link>
                </div>
                
        </div>
         
    )
}          
export default ItemDetail;
