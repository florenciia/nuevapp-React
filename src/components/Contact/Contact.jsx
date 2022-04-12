import React from 'react';
import './Contact.css';

export const Contact = () => {
  return (
    <>
        <h1 className='titleContact'>Contact us</h1>

        <p className='textContact'> Name: </p>
        <input type='text' placeholder='your name'> </input>

        <p className='textContact'> Email: </p>
        <input type='text' placeholder='your email'> </input>

        <p className='textContact'> Whatsapp</p>
        <input type='text' placeholder='your telephone number'> </input>

     
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    Kids
                </label>
        </div>
        
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                <label class="form-check-label" for="flexCheckChecked">
                    Women
                </label>
        </div>
        
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                <label class="form-check-label" for="flexCheckChecked">
                    Men
                </label>
        </div>

    </>
    
  );
};
