
import React from 'react';
import useProducts from '../../hooks/useProducts';

const Review = () => {
    const [products] = useProducts();
    return (
        <div>
            <h3>{products.length}</h3>
            <h3>This is OrderReview Page section</h3>
        </div>
    );
};

export default Review;