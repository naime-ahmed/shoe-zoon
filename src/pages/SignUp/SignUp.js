import React from 'react';
import { CircularProgress } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';
import './SignUp.css';
import Navigation from '../../shared/Navigation/Navigation';
import Footer from '../../shared/Footer/Footer';
import regImg from '../../images/signUp_img.jpg';

const SignUp = () => {

    const navigate = useNavigate();
    const { registerUser, isLoading, authError } = UseAuth();
    
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        registerUser(data.name, data.email, data.password, navigate);

        reset();
    };
    return (
        <div>
            <Navigation/>
            <div className='signUp_Page'>
                <div className='signUp_img'>
                    <img src={regImg} alt="" />
                </div>
                <div className='signUp_form'>
                {isLoading && <CircularProgress />}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {authError && <p>{ authError}</p>}
                        <input  {...register("name")} placeholder='your name' type="text" required /> <br /> <br />
                        
                        <input {...register("email", { required: true })} placeholder='your email' type='email' required /> <br /> <br />

                        <input {...register("password", { required: true })} placeholder='password' type='password' required /> <br /> <br />
                        
                        <input className='signUp-button' type="submit" value="Sign up"/>
                        <p>have an account? <Link to="/signIn">sign in</Link></p>
                        
                    </form>
                    
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default SignUp;