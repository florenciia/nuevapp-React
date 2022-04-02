import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({perfumes}) => {
  return (
        <div className='cadaProducto'>
        
          {perfumes.map((perfumeElegido) => (
            <Item {...perfumeElegido} key={perfumeElegido.id} />                
            )
          )} 
              
        </div>
  );
};
export default ItemList;