import React from 'react';
import './ManageSinglePd.css';
import swal from 'sweetalert';

const ManageSinglePd = (props) => {

    const { name, img, _id } = props.product;

    const handleDelete = (id) => {

        const proceed = window.confirm('want to delete ?')
        if (proceed) {
            fetch(`localhost:5000/${id}`, {
            method: 'DELETE',
            headers: { "Content-type": "application/json" },
            })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount) {
                    alert("delete successfully")
                    swal({
                        title: "done",
                        text: "delete successfully!",
                        icon: "success",
                      });
                }
                
            })
        }
         
    }
    return (
        <div className="manage-one-pd">
            <div className="manage-one-pd-img">
                <img src={img} alt="" />
            </div>
            <div className="manage-one-pd-text">
                <h5>Product Name: {name}</h5>
                <button onClick={()=>handleDelete(_id)} className="pd-delete-btn">Delete</button>
            </div>
        </div>
    );
};

export default ManageSinglePd;