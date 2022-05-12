import React, {useState} from 'react';
import './ItemCount.css';

export const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(0);

    const add = () => {
        if(count < stock) {
            setCount(count + 1);    
        } 
        else{
            alert('Límite de solicitud')
        }
    }

    const del = () => {
         if(count > initial){
            setCount(count - 1);
         }
         else{
             alert('Agregar producto')
         }
         
    }
  return (
    <div className="count">

            <h1 className="countN">{count}</h1>
            <button className="btnn" onClick={add}> + </button>
            <button className="btnn" onClick={del}> - </button>
            <br/>
            {count > 0 ? <button className='btn-add' onClick={() => onAdd(count)}> Add my products</button> : <> </>}
        </div>    
  )
}
