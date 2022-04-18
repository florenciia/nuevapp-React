import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({titulo, img, precio, id, stock}) => {
  return (
        <div className='container'>            
                        <div className='muestraPerfume'>
                                
                                <p className='id'> id: {id} </p> 

                                <h1 className='titulo'> {titulo} </h1>
                                
                                <div className='img-div'>
                                  <img className='imgg' src={img} alt='images'/>
                                </div>
                                
                                <p className='precio'> Precio: {precio} </p>

                                <p className='stock'> Stock: {stock} </p>

                                <Link to={`/item/${id}`}>
                                  <div className='btn-div'>
                                    <button className='btn-details'> Ver detalles </button>
                                  </div>
                                </Link>                                
                                
                        </div>            
        </div>          
    );
};

export default Item;