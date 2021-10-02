
 import logo from '../../images/logo.png';
 import './Header.css';
import React from 'react';

import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>  
            <img  className="logo" src={logo} alt=""/>
           <nav className="nav"> 
               <Link to  ="/shop">Shop</Link>
               <Link to  ="/review">OrderReview</Link>
               <Link to  ="/inventory">Inventory Manage</Link>
               
              
            
           </nav>
        </div>
    );
};

export default Header;