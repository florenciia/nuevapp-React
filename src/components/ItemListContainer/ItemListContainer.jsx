import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import {traerPerfumes} from '../PerfumesDatos';
import {useParams} from 'react-router-dom';
import './ItemListContainer.css';
import logo from '../NavBar/logo.jpeg';
import { Link } from 'react-router-dom';

export default function ItemListContainer ({greeting}) {

  const [perfumes, setPerfumes] = useState([]);
    const [loading, setLoading] = useState(true);

    const {tipo} = useParams();


    useEffect(() => {
    traerPerfumes.then(resultado => {
        if(tipo){
            // let perfumess = resultado.filter(elemento => elemento.tipo === tipo);
            // setPerfumes(perfumess);
            setPerfumes(resultado.filter(perfume => perfume.tipo === tipo));
        } else {
            setPerfumes(resultado);
        }
        
    })
    .finally(() => {
        setLoading(false);
    });
    }, [ tipo ]);

  
  return (

    <div>
    
      {loading ? (
        <h1 className="inicio">{greeting="Bienvenidos a Sensations.Perfumes"}</h1>
          
          
      ) : (
        <>
          <ItemList perfumes={perfumes}/>
        </>

      )}
      

      <footer class="footer">
                    <div className='caja2'>
                    <Link to={`/`}> <img className="logo2" src={logo} alt='img-logo'/> </Link>
                        <p className="text"> CopyRight Perfume.Sensations 2022</p>
                    </div>
      </footer>
  
    </div>
  )
}