import React from 'react';
import cart from './cart.svg';
import './CartWidget.css';

export default function CartWidget({count}) {
  return (
    <div className='carrito'>
        <img className='imgCarrito' src={cart} alt='cart'/>  
        <h3 className='numItem'> {count} </h3>  
    </div>
  );
};