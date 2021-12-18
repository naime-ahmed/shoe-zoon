import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Navigation from '../../shared/Navigation/Navigation';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
import Products from './Products/Products';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Service />
            <Products/>
            <Blogs />
            <Footer/>
        </div>
    );
};

export default Home;