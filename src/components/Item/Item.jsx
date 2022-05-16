import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({nombre, img, precio, id, stock}) => {
  return (
        <div className='container'>            
                        <div className='muestraPerfume'>
                                
                                <p className='id'> id: {id} </p> 

                                <h1 className='titulo'> {nombre} </h1>
                                
                                <div className='img-div'>
                                  <img className='imgg' src={img} alt='images'/>
                                </div>
                                
                                <p className='precio'> Price: ${precio} </p>

                                <p className='stock'> Stock: {stock} </p>

                                <Link to={`/item/${id}`}>
                                  <div className='btn-div'>
                                    <button className='btn-details'> More details </button>
                                  </div>
                                </Link>                                
                                
                        </div>            
        </div>          
    );
};

export default Item;