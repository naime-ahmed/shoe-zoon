import React from 'react';
import './ManageSingleOd.css';
import swal from 'sweetalert';

const ManageSingleOd = (props) => {

    const { name, productName, quantity, address, date, status, _id } = props.order;

    const handleApproved = (id) => {

        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method:"PUT"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    swal({
                        title: "Good job!",
                        text: "update successfully",
                        icon: "success",
                    });
                    
                }
            })
    }

    const handleDeleteOrder = id => {
        const proceed = window.confirm('you want to delete?')
        if (proceed) {
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    swal({
                        title: "done",
                        text: "delete successfully",
                        icon: "success",
                    });
                   
                }
                
            })
        }
        
    };

    return (
        <div className="oneOrder">
            <div className="one-order-item">
                <p>Customer: {name}</p>
                <p>Product: { productName}</p>
            </div>
            <div className="one-order-item">
                <p>Date: {date}</p>
                <p>Address: { address}</p>
            </div>
            <div className="one-order-item">
                <p>Position: {status }</p>
                <p>Quantity: { quantity}</p>
            </div>
            <div className="one-order-item">
               <button onClick={()=> handleApproved(_id)} className="approved-btn">approved</button>
               <button onClick={()=> handleDeleteOrder(_id)} className="delete-btn">Delete</button>
            </div>

        </div>
    );
};

export default ManageSingleOd;