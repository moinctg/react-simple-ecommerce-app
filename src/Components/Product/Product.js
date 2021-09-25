import React from 'react';

import './Product.css'

const Product = (props) => {
    console.log(props.product)

    const {name,img,catagory,price,stock,shoping} = props.product;
    return (
        <div>
            <h3>this product section</h3>
            <img src={img} alt=""/>
    {/* <h3>Image: {img}</h3> */}
    <h3>name: {name}</h3>
    <h3>Price: {price}</h3>
    <h3>Stock: {stock}</h3>
        </div>
    );
};

export default Product;