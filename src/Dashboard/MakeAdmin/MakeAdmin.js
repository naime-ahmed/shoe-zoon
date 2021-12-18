import React from 'react';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css';
import swal from 'sweetalert';

const MakeAdmin = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        fetch('https://morning-plains-75457.herokuapp.com/user/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    swal({
                        title: "Good job!",
                        text: "added as an admin",
                        icon: "success",
                    });
                    reset();
                }
            })
        console.log(data);
        
    };
    return (
        <div className="make-admin-from">
            <div className="make-admin-from-header">
                <h1>Make Admin a Registered User</h1>
            </div>
            <div className="form-parent">
                <div className="admin-form-style">
                    <form onSubmit={handleSubmit(onSubmit)}>
                         
                        <input  {...register("email", { required: true })} placeholder="User Email" type="email" />
                        <br /> <br />
                                
                        <input className="make-admin-btn" type="submit" value="Make Admin" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;