import { CircularProgress } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import Navigation from '../../shared/Navigation/Navigation';
import UseAuth from '../Hooks/UseAuth';
import './SignIn.css';
import signInImg from '../../images/login-img.jpg';

const SignIn = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { loginUser, isLoading, authError } = UseAuth();
    
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        loginUser(data.email, data.password, location, navigate);

        reset();
    };
    return (
        <div>
            <Navigation/>
            <div className='signIn_Page'>
                <div className='signIn_img'>
                    <img src={signInImg} alt="" />
                </div>
                <div className='signIn_form'>
                {isLoading && <CircularProgress />}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {authError && <p>{ authError}</p>}
                        
                        <input {...register("email", { required: true })} placeholder='your email' type='email' required /> <br /> <br />

                        <input {...register("password", { required: true })} placeholder='password' type='password' required /> <br /> <br />
                        
                        <input className='signIn-button' type="submit" value="Sign in" />
                        <p>new here? <Link to="/signUp">please sign up</Link></p>
                        
                    </form>
                    
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default SignIn;