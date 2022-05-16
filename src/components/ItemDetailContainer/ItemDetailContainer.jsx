import React, { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { useParams } from "react-router-dom";
import {getById} from '../../utils/fetchData';
import loading from './loading.gif'

function ItemDetailContainer(){
    const [perfume, setPerfume] = useState({});
    const {id} = useParams();

    useEffect(() => {
      getById(id).then(r => setPerfume(r));
    },[id])

    return(
    
            <div>
                {!perfume ? <h1 className="loading"> {loading} </h1>
                    : <ItemDetail {...perfume}/>
                }
            </div>
        
    )
}
export default ItemDetailContainer;
