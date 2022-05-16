import React, { useState, useEffect } from 'react';
import db from '../../utils/firebaseConfig';
import {collection, doc, increment, setDoc, updateDoc} from 'firebase/firestore';

export default function Formulario({createOrder}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <>
        <input
            type={'text'}
            value={name}
            onChange={(e) => setName(e.target.value)}
        />

        <input
            type={'email'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <input
            type={'tel'}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
        />

          <button className='btn-add' onClick={() => createOrder(name, email, phone)}> Terminar Compra</button>

    </>

    );

};