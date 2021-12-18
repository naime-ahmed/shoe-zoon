import React, { useEffect, useState } from 'react';
import Footer from '../../shared/Footer/Footer';
import Navigation from '../../shared/Navigation/Navigation';
import './Featured.css';
import SinglePd from './SinglePd/SinglePd';

const Featured = () => {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('https://morning-plains-75457.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setAllProducts(data));
    }, [allProducts]);

    return (
        <div>
            <Navigation/>
            <div className='featured-page'>
                <div className='featured-headline'>
                    <h1>featured products</h1>
                </div>
                <div className='allProducts'>
                    {
                        allProducts.map(product => <SinglePd
                            key={product._id}
                            product={product}
                        
                        ></SinglePd>)
                    }
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Featured;