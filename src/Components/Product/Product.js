import React from 'react';

import './Product.css'

const Product = (props) => {
    console.log(props.product)

    const {name,img,catagory,price,stock,shoping,seller} = props.product;
    return (
        <div className="products">
    <div> <img src={img} alt=""/></div>
  <div>
    <h3 className="product-name"> {name}</h3>
    <p> Price: {price} </p>
     <p> <small>By: {seller} </small></p>
     <p> <small>Stock: {stock} </small></p>  
     </div>
   
        </div>
    );
};

export default Product;