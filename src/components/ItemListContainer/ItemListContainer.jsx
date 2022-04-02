import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import {traerPerfumes} from '../PerfumesDatos';
import {useParams} from 'react-router-dom';

import './ItemListContainer.css';


export default function ItemListContainer ({greeting}) {

  const [perfumes, setPerfumes] = useState([]);
    const [loading, setLoading] = useState(true);

    const {tipo} = useParams();


    useEffect(() => {
    traerPerfumes.then(resultado => {
        if(tipo){
            let perfumess = resultado.filter(elemento => elemento.tipo === tipo);
            setPerfumes(perfumess);
        } else {
            setPerfumes(resultado);
        }
        
    })
    .finally(() => {
        setLoading(false);
    });
    }, [ tipo ]);

  
  return (
    <div className='text'>
      {loading ? (
          <h1 className="inicio">{greeting="Bienvenidos a Sensations.Perfumes"}</h1>
      ) : (
        <ItemList perfumes={perfumes}/>
      )}
      
    </div>
  )
}

/*
    useEffect(() => {

        const pago = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('50')

            }, 3000)
            //reject(null)
        })

        console.log(pago);

        pago.then((res) => {
            console.log('gracias por pagar ' + res)
        })
        
        console.log(pago)

        //sigue....


    }, [])
*/