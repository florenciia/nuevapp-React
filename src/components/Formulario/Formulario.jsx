// import React, { useState, useEffect } from 'react';

// export default function Formulario() {

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');

// function terminarCompra() {

// //example buyer

//     let buyer = {

//         buyer: { name, phone, email },
//         items: [{ id, title, price },{ id, title, price }], //meter carrito adentro
//         total: 100,

//     }; 

//     alert('quiere terminar la compra ' + name + email + phone);

//     }

//     useEffect(() => {
//     console.log(name, email, phone);
//     }, [name, email, phone]);

//     return (
//         <>
//         <input
//             type={'text'}
//             value={name}
//             onChange={(e) = {
//                 setName(e.currentTarget.value);
//             }}
//         />

//         <input
//             type={'text'}
//             value={name}
//             onChange={(e) = {
//                 setEmail(e.currentTarget.value);
//             }}
//         />

//         <input
//             type={'text'}
//             value={name}
//             onChange={(e) = {
//                 setPhone(e.currentTarget.value);
//             }}
//         />

//         <button
            
//         />
//         { terminarCompra()}

//     </>

//     );

// };