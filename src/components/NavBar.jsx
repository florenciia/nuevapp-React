import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand title"> Sensations.Perfumes</a>
                
                <button className="navbar-toggler btn-tog" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active navi" aria-current="page">Home</a>
                    </li>
                    <li classname="nav-item">
                        <a className="nav-link active navi">Perfumes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active navi">Contact</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link navi dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories </a>

                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item"> Kids</a></li>
                        <li><a className="dropdown-item"> Men </a></li>
                        <li><a className="dropdown-item"> Woman</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link navi">My cart</a>
                    </li>       
                    <li>
                        <CartWidget />     
                    </li>
                         
                </ul>
                    
                </div>
                
            </div>
        </nav>
    </>
  )
}
export default NavBar;