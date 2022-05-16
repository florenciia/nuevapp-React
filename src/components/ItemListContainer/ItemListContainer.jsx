import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';
import './ItemListContainer.css';
import fetchData from '../../utils/fetchData';
import { Footer } from '../Footer/Footer';


export default function ItemListContainer ({greeting}) {

  const [perfumes, setPerfumes] = useState([]);
    const [loading, setLoading] = useState(true);

    const {tipo} = useParams();


    useEffect(() => {
      tipo ? fetchData(tipo).then(r => {
        setLoading(false);
        setPerfumes(r);
      }) : fetchData().then(r => {
        setLoading(false);
        setPerfumes(r);
      });
    }, [tipo]);

  return (

    <div>
    
      {loading ? (<h1 className="inicio">{greeting="Welcome to Perfume Sensations"}</h1>) :
          (<ItemList perfumes={perfumes}/>)}

        <Footer/>
    </div>
  )
}