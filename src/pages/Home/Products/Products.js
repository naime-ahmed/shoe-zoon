import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('https://morning-plains-75457.herokuapp.com/topProduct')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);
    console.log(products);
    return (
        <div className='top_product'>
            <div className='top-product-header'>
                <h1>Our Best product</h1>
            </div>
            <div className='all-products'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;