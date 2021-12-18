import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Footer from '../../../shared/Footer/Footer';
import Navigation from '../../../shared/Navigation/Navigation';
import './OrderProduct.css';
import swal from 'sweetalert';
import UseAuth from '../../Hooks/UseAuth';

const OrderProduct = () => {

    const [orderProduct, setOrderProduct] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const { orderItemId } = useParams();
    const navigate = useNavigate();
    const { user } = UseAuth();

    useEffect(() => {
        fetch(`https://morning-plains-75457.herokuapp.com/orderProduct/${orderItemId}`)
            .then(res => res.json())
            .then(data => setOrderProduct(data));
    }, [orderItemId]);


    const onSubmit = (data) => {
        data.status = "pending";
        fetch('https://morning-plains-75457.herokuapp.com/allOrder', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "order successful",
                        icon: "success",
                    })
                    reset();
                    navigate('/myOrders')
                    
                }
            })
        
    }

    return (
        <div>
            <Navigation/>
            <div className="place-order-section">
                <div>
                    <div className="place-order-item">
                        <div className="order-img">
                            <img src={orderProduct?.img} alt="" />  
                        </div>
                        <div className="product-text">
                            <h3>{orderProduct?.name}</h3>
                            <p>{orderProduct?.description}</p>
                            <h4>Price: {orderProduct.price}</h4>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <div className="place-order-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            
                            <input  {...register("name", { required: true })} defaultValue={user.displayName} />
                            <br /> <br />
                            
                            <input readOnly {...register("productName", { required: true })} defaultValue={orderProduct.name} />
                            <br /> <br />

                            <input  {...register("quantity", { required: true })} placeholder="quantity" type="number" />
                            <br /> <br />
                            
                            <input  {...register("address", { required: true })} placeholder="your address" />
                            <br /> <br />

                            <input  {...register("date", { required: true })} defaultValue={new Date().toLocaleDateString()} />
                            <br /> <br />
                            
                            <input className="place-order-btn" type="submit" value="place order" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default OrderProduct;