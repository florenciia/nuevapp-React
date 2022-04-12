import React from 'react';
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg todo-el-nav">
            <div className="container-fluid">
                <Link to={`/`} className="navbar-brand title"> Sensations.Perfumes</Link>
                
                <button className="navbar-toggler btn-tog" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={`/`} className="nav-link active navi " aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/`} className="nav-link active navi ">Perfumes</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`contact`} className="nav-link active navi ">Contact</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link to={`/`} className="nav-link navi dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories </Link>

                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><Link to='category/niños' className="dropdown-item"> Kids</Link></li>
                        <li><Link to='category/man' className="dropdown-item"> Men </Link></li>
                        <li><Link to='category/woman' className="dropdown-item"> Woman</Link></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                        <Link to={`/`} className="nav-link navi">My cart</Link>
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