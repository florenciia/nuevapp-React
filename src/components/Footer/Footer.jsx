import React from 'react';
import logo from '../NavBar/logo.jpeg';
import './Footer.css';

export const Footer = () => {
  return (
    <div>
        <footer className="footer">
                        <div className="caja2">
                            <img className="logo2" src={logo} alt='img-logo'/>
                            <p className="text"> CopyRight Perfume.Sensations 2022</p>
                        </div>
        </footer>
    </div>
  )
}
