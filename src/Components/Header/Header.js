
 import logo from '../../images/logo.png';
 import './Header.css';
import React from 'react';

const Header = () => {
    return (
        <div>  
            <img  className="logo" src={logo} alt=""/>
           <nav className="nav"> 
               <a href ="/shop">Shop</a>
               <a href ="/order">Order Review</a>
               <a href ="/Manage">Manage Inventory</a>
               <a href ="/shop">Shop</a>
           </nav>
        </div>
    );
};

export default Header;