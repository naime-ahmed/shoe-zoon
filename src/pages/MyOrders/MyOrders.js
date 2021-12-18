import React, { useEffect, useState } from 'react';
import Footer from '../../shared/Footer/Footer';
import Navigation from '../../shared/Navigation/Navigation';
import UseAuth from '../Hooks/UseAuth';
import MyOrder from './MyOrder/MyOrder';
import './MyOrders.css';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);

    const { user } = UseAuth();
    useEffect(() => {
        fetch('https://morning-plains-75457.herokuapp.com/allOrder')
            .then(res => res.json())
            .then(data => setMyOrders(data?.filter(order => order.name === user.displayName)));
    }, [myOrders]);
    return (
        <div>
            <Navigation/>
            <div className="my-all-order">
                <div className="my-all-order-header">
                    <h1>Here is your all orders</h1>
                </div>
                <div className="">
                    {
                        myOrders?.map(order => <MyOrder
                            key={order._id}
                            order={order}
                        
                        ></MyOrder>)
                    }
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default MyOrders;