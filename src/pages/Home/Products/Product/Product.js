import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const { name, img, doc, price, _id } = props.product;


    const navigate = useNavigate();
    const placeOrder = () => {
        navigate(`/orderProduct/${_id}`)
    }
    return (
        <div className='product-card' data-aos="fade-up"
        data-aos-duration="1500">
            <div className="container">
                <div className="card">
                    <div className="imgBx">
                        <img src={ img} alt=""/>
                    </div>
                    <div className="contentBx">
                        <h2>{ name}</h2>          
                        <p>{doc}</p>
                        <p>Price: {price }</p>
                        <button onClick={placeOrder}  className="card-btn">Buy Now</button>           
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;