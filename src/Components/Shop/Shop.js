
import React, { useState, useEffect } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    

    useEffect ( ()=> {

        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    }
        ,[])

    const handleAddToCard = (product) => {
        // console.log(product)
        const newCart = [...cart, product];
         setCart(newCart)

    }


    return (
        <div className="shop-container">
            <div className="product-container">
    <h3>Product:{products.length}</h3>
    {

        products.map(product=> <Product
            key={product.key}
            product={product}
            handleAddToCard={ handleAddToCard }
        
        
        >

        </Product>)
    }

            </div>
            <div className="cart-container">
               
                   <Cart cart={cart}></Cart>
                    
            </div>
        </div>
    );
};

export default Shop;