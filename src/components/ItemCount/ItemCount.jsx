import React, {useState} from 'react';
import './ItemCount.css';

export const ItemCount = () => {

    const [count, setCount] = useState(0);

    const onAdd = () => {
        if(count < 6) {
            setCount(count + 1);    
        } 
        else{
            alert('Límite de solicitud')
        }
    }

    const decrease = () => {
         if(count > 0){
            setCount(count - 1);
         }
         else{
             alert('Agregar producto')
         }
         
    }
  return (
    <div className="count">
            <h1 className="countN">{count}</h1>
            <button className="btnn" onClick={onAdd}> + </button>
            <button className="btnn" onClick={decrease}> - </button>
            
        </div>    
  )
}
