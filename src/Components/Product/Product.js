import React from 'react';

import './Product.css'

const Product = (props) => {
    // console.log(props);

    const { name, img, price, stock, seller } = props.product;
    return (
        <div className="products">
            <div> <img src={img} alt="" /></div>
            <div className="protucs-item">
                <h3 className="product-name"> {name}</h3>
                <p> Price: ${price} </p>
                <p> <small>By: {seller} </small></p>
                <p> <small>Only {stock} left in stock -order soon </small></p>

                <button
                    onClick ={ ()=> props.handleAddToCard (props.product) }
                    className="btn-regular">
                        Add To Card</button>
            </div>


        </div>
    );
};

export default Product;