import React, {useContext} from 'react';
import cart from './cart.svg';
import './CartWidget.css';
import { CartContext } from '../CartContext/CartContext';

export default function CartWidget() {

  const {CartProducts} = useContext(CartContext);

  return (

    <div className='carrito'>
        <img className='imgCarrito' src={cart} alt='cart'/>  
        <h3 className='numItem'> {CartProducts.reduce((acc,item) => acc + item.quantity, 0)} </h3>  
    </div>

  );
};