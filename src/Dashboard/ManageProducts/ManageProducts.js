import React, { useEffect, useState } from 'react';
import './ManageProducts.css';
import ManageSinglePd from './ManageSinglePd/ManageSinglePd';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);
    console.log(products);
    return (
        <div className="manage-all-pd">
            <div className="manage-all-pd-header">
                <h1>Manage all Product</h1>
            </div>
            <div className="manage-all-pd-items">
                {
                    products.map(product => <ManageSinglePd
                        key={product._id}
                        product ={product}
                    
                    ></ManageSinglePd>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;