import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-style">
                <div className="footer-part">
                    <h4>About Us</h4>
                    <p>Careers</p>
                    <p>Investor</p>
                    <p>Refund policy</p>
                    <p>Privacy policy</p>
                    <p>Offers</p>
                </div >
                <div className="footer-part">
                    <h4>Popular Brands</h4>
                    <p>Bata</p>
                    <p>Nike</p>
                    <p>Power</p>
                    <p>Comfit</p>
                    <p>North Star</p>
                    
                </div>
                <div className="footer-part">
                    <h4>Help</h4>
                    <p>FAQs</p>
                    <p>Customer Care</p>
                    <p>Barrel Guide</p>
                    <p>Price Promise</p>
                    <p>Delivery</p>
                </div>
                <div className="footer-part">
                    <h4>Address</h4>
                    <p>123, New Lenox</p>
                    <p>Chicago, IL 60608-4567</p>
                    <h4>Phone</h4>
                    <p>+1(123)567-8901</p>
                </div>
            </div>
            <hr />
            <div className="copyright">
                <h5>naime ahmed &#169;2021 All Rights Reserved</h5>
            </div>
        </div>
    );
};

export default Footer;