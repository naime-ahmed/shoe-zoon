import React, { useEffect, useState } from 'react';
import './ManageOrders.css';
import ManageSingleOd from './ManageSingleOd/ManageSingleOd';

const ManageOrders = () => {
    
    const [allOrder, setAllOrder] = useState([]);

    useEffect(() => {
        fetch('https://morning-plains-75457.herokuapp.com/allOrder')
            .then(res => res.json())
            .then(data => setAllOrder(data));
    }, [allOrder])
    return (
        <div className="manage-all-order">
            <div className="manage-all-order-header">
                <h2>Manage All Order</h2>
            </div>
            <div className="manage-all-order-items">
                {
                    allOrder.map(order => <ManageSingleOd
                        key={order._id}
                        order={order}
                    
                    ></ManageSingleOd>)
                }
            </div>
        </div>
    );
};

export default ManageOrders;