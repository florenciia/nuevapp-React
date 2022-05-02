import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
        <div className='contactoGeneral'>

            <h1 className='titleContact'>Contact us</h1>

            <p className='textContact'> Name: </p>
            <input className='input' type='text' placeholder='Your name'/>

            <p className='textContact'> Email: </p>
            <input className='input' type='text' placeholder='Your email'/>

            <p className='textContact'> Whatsapp</p>
            <input className='input' type='text' placeholder='Your telephone number'/>

            <br/>
            <br/>
            <br/>
            <p className='textContact'> More information about...</p>


            <div className='check'>

                <div className="form-check">
                    <input className="form-check-input tamaño" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault"> Kids </label>
                </div>
          
                <div className="form-check">
                    <input className="form-check-input tamaño " type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault"> Women </label>
                </div>

                <div className="form-check">
                    <input className="form-check-input tamaño" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault"> Men </label>
                </div>

            </div>

            <div>
                <button class="btn-submit" type="submit">Send</button>
            </div>



           
        </div>
  );
};
