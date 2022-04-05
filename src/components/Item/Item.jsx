import React from 'react';
import './Item.css';
import { ItemCount } from '../ItemCount/ItemCount';

const Item = ({id, titulo, imgg, precio}) => {
  return (
        <div className='container'>            
                        <div className='muestraPerfume'>
                                <p className='id'> id: {id} </p>
                                <h1 className='titulo'> {titulo} </h1>
                                <img src={imgg} alt='images'/>
                                <p className='precio'> Precio: {precio} </p>
                               
                                <ItemCount stock="10" initial="0" />
                                <button className='btn-add'> Ver detalles </button>
                        </div>            
        </div>          
    );
};

export default Item;