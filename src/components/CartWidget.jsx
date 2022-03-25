import React from 'react';
import cart from './cart.svg';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className='carrito'>
        <img className='imgCarrito' src={cart} alt='cart'/>    
    </div>
  )
}

export default CartWidget;