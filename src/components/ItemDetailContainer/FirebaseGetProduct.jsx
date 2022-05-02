// import React, {useEffect, useState} from 'react';
// import {doc, getDoc, getFiresrtore} from 'firebase/firestore';

// export const Firebase = () => {

//     //id: wtEz3p4pv9NRwta1k3MF
//     //coleccion: perfumes

//     useState[perfume, setPerfume] = useState({});

//     const db = getFiresrtore(); //conexion a base de datos
//     const perfume = doc(db,'perfumes', 'wtEz3p4pv9NRwta1k3MF');


//     <div>Firebase</div>

//    getDoc(perfume).then((res) =>{
//     //    console.log(res.id);
//     //    console.log(res.data());

//        const objetoJunto = {id: res.id, ...res.data()};
//     //    console.log(objetoJunto)
//    });

//    useEffect(() => {

//    });
//    }, []);
   

//    return (<>
//    { perfume.id ? (
       
//     <>{perfume.id + ' ' + perfume.name}
//     <br/>
//     {<img />}
//     </>
//    )
//    :
//    (
//     <p> 'Loading...' </p>
//    )}
//    </>
//    );
// }


// //reemplazar promesa por --> getDoc(perfume) = promesa

// //res.data() --> es un método



import React, {useEffect, useState} from 'react';
import {doc, getDoc, getFirestore} from 'firebase/firestore';

export default function FirebaseGetProduct () {
    // id: 0TNeWRvnyarF3eGuJFLF
    // coleccion: perfumes
    useEffect(() => {
        
    //Para conectar a la base de datos de firestore
    const db = getFirestore();

    //(base de datos, coleccion, id)
    const perfumeRef = doc(db, 'perfumes', '0TNeWRvnyarF3eGuJFLF');

    //getDoc es una promesa --> Devuelve promesa. getDoc(algo)
    getDoc(perfumeRef).then((res) =>{
        console.log(res.id);
        console.log(res.data());
        })
    }, []);

    return <> </>;
}