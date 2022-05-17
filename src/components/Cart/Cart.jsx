import React, {useContext, useState} from 'react';
import './Cart.css';
import {CartContext} from '../CartContext/CartContext';
import {Link} from 'react-router-dom';
import {collection, doc, setDoc} from 'firebase/firestore';
import db from '../../utils/firebaseConfig';
import { Footer } from '../Footer/Footer';

export const Cart = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const {CartProducts, removeItems} = useContext(CartContext);
  let listaDeTotales = [];

  const createOrder = () => {
    const order = {
      buyer: {name, email, phone},
      items: CartProducts.map(item => ({
        id: item.id,
        title: item.name,
        price: item.price
      })),
      total: listaDeTotales.reduce((acc, b) => acc + b, 0)
    };
    console.log(order);

    (async function () {
      const newOrderRef = doc(collection(db, 'orders'))
      await setDoc(newOrderRef, order);
      return newOrderRef
    })()

    alert('Do you want to finish the purshase  ' + name + ' ' + email + ' ' + phone);

  }

  return (
      <>
        {CartProducts.length === 0 ? (
            <>
              <h2 className="noHayProd"> THERE ARE NO PRODUCTS!</h2>

              <div className="btn-volver">
                <Link to={`/`}>
                  <button className="volverElegir"> Choose my perfume!</button>
                </Link>
                <br/>
                <Link to={`/category/kids`}>
                  <button className="volverA"> About kids</button>
                </Link>

                <Link to={`/category/men`}>
                  <button className="volverA"> About mens</button>
                </Link>

                <Link to={`/category/women`}>
                  <button className="volverA"> About womens</button>
                </Link>
              </div>
            </>


        ) : (CartProducts.map((prod) => {

                  const total = prod.precio * prod.quantity
                  listaDeTotales.push(total);

                  return (
                      <div className="compraFinal1" key={prod.id}>
                        {/* <h1 className='titulo1'> Detalle de tu compra </h1> */}
                        <h2 className='nombre'>{prod.nombre}</h2>
                        <img className='img1' src={prod.img} alt="img"/>
                        <p> Count: {prod.quantity}</p>
                        <p> Price for unit: ${prod.precio}</p>
                        <p> Total price: ${total}</p>
                       
                        <button className="btn-add-final1" onClick={() => removeItems(prod.id)}> Delete product </button>
                      </div>
                  )

                }
            )
        )

        }
        <div className='inputGroup'>
            <input className='input' type="text" placeholder=" name" value={name} onChange={(e) => setName(e.target.value)} required/>
            <input className='input' type="text" placeholder=" email@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <input className='input' type="text" placeholder=" (011) XXXX XXXX" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
          
        
            <h2 className='totalAPagar'> Total to pay:  <br/>${listaDeTotales.reduce((acc, b) => acc + b, 0)}</h2>
    

            <button className="btn-add-finish" onClick={() => createOrder()}> Finish buying </button>
            <Link to={`/`}>
                  <button className="btn-add-finish"> Add more </button>
            </Link>
        </div>
       
        
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer/>

        {/*<Link to={'/form'} className='alineacion'> <button className='btn-add-final'> Terminar Compra </button> </Link>*/}

      </>
  )
}