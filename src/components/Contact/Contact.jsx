import React from 'react';
import './Contact.css';
import { Footer } from '../Footer/Footer';

export default function Contact() {
  return (

        <div>
                <div className='contactoGeneral'>

                    <h1 className='titleContact'>Contact us</h1>

                    <form>
                        <label for="nombreapellido"> Name and surname</label>
                        <input type="text" id="nombreapellido" className="input-padron" placeholder='name surname' required/> 

                        <label for="email"> Email </label>
                        <input type="email" id="email" placeholder="email@email.com" className="input-padron" required/> 
                        
                        <label for="phone"> Phone </label>
                        <input type="tel" id="phone" placeholder="(011) XXXX XXXX" className="input-padron" required/> 

                        <label for="msj">Massage</label>
                        <textarea cols="65" rows="10" id="msj" className="input-padron" required> </textarea>

                        <fieldset className="fieldset">
                            <legend className="quest"> How do you prefer us to contact you? </legend>

                            <label for="radio-email"> 
                                <input type="radio" name="contacto" value="email" id="radio-email"/>
                                Email
                            </label>
                            <label for="radio-phone">
                                <input type="radio" name="contacto" value="phone" id="radio-phone"/> 
                                Phone
                            </label>
                            <label for="radio-wpp">
                                <input type="radio" name="contacto" value="wpp" id="radio-wpp" checked/> 
                                WhatsApp
                            </label>
                            
                        </fieldset>

                        <fieldset className="fieldset">
                            
                            <legend className="quest"> What time do you prefer to be attended? </legend>
                            
                            <select className='option'>
                                <option className='option'> Morning </option>
                                <option className='option'> Afternoon </option>
                                <option className='option'> Evening </option>
                            </select>
                            
                        </fieldset>

                        <label className="checkboxx"> <input type="checkbox" checked/> Would you like recibed news about our perfumes?</label>
                        
                        <input type="submit" value="Enviar formulario" className="enviar"/>
                    </form>

                </div>

                <Footer/>
        </div>
        

  );
};
