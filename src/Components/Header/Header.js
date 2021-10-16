
 import logo from '../../images/logo.png';
 import './Header.css';
import React from 'react';

import {Link} from 'react-router-dom';
import useFirebase from '../../hooks/UseFirebase';


const Header = () => {
    const { user,logOut } = useFirebase();
    // console.log(user);
    return (
        <div>  
            <img  className="logo" src={logo} alt=""/>
           <nav className="nav"> 
               <Link to  ="/shop">Shop</Link>
               <Link to  ="/review">OrderReview</Link>
               <Link to  ="/inventory">Inventory Manage</Link>
               <Link to  ="/register">Register</Link>
               <Link to  ="/login">Login</Link>
               <span className="name"> {user.displayName}</span>
              { user?.displayName &&  <button onClick={logOut}>Logout</button> } 
               
              
            
           </nav>
        </div>
    );
};

export default Header;