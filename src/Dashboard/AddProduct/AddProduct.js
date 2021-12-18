import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css';
import swal from 'sweetalert';

const AddProduct = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch('localhost:5000/addProduct', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    
                    swal({
                        title: "Good job!",
                        text: "added successfully!",
                        icon: "success",
                    });
                    reset();
                }
            })
        
    };

    return (
        <div className="add-product-form">
            <div className="add-product-title">
                <h1>Add A New Service</h1>
            </div>
            <div className="form-field-style">
                <div className="form-style">
                    <form onSubmit={handleSubmit(onSubmit)}>
                       
                        <input  {...register("name", { required: true })} placeholder="product name" className="input-style" />
                        <br /> <br />
                        
                        <input  {...register("price", { required: true })} placeholder="price" />
                        <br /> <br />
                        
                        <input  {...register("img", { required: true })} placeholder="photo url" />
                        <br /> <br />

                        <textarea  {...register("description", { required: true })} placeholder="Short description" />
                        <br /> <br />
                        
                        <input className="submit-btn" type="submit" value="Add" />
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default AddProduct;