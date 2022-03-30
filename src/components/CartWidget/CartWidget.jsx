import React from 'react';
import cart from './cart.svg';
import './CartWidget.css';

export default function CartWidget() {
  return (
    <div className='carrito'>
        <img className='imgCarrito' src={cart} alt='cart'/>    
    </div>
  );
};