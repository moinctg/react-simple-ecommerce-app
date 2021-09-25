
import React, { useState, useEffect } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const [ products,setProducts] = useState([]);
    useEffect ( ()=> {

        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    }
        ,[])
    return (
        <div className="shop-container">
            <div className="product-container">
    <h3>Product:{products.length}</h3>
    {

        products.map(product=> <Product
            key={product.key}
            product={product}
        
        
        >

        </Product>)
    }

            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <h5>Item Ordered:</h5>

            </div>
        </div>
    );
};

export default Shop;