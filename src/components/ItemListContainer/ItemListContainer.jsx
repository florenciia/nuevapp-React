import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemListContainer.css';

export default function ItemListContainer ({greeting}) {

  // function onAdd(stock) {  
    // rever
  // }
  
  return (
    <div className='text'>
        {greeting}
          <br/>
          <br/>
        <ItemCount stock="10" initial="0"  />
        {/* <ItemCount stock="10" initial="0" onAdd={onAdd} /> */}
    </div>
  )
}

