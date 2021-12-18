import React from 'react';
import './Service.css';

const Service = () => {
    return (
        <div className='service-container'>
            <div className='service' data-aos="fade-right" data-aos-duration="2000" >
                <h3> <i className="fas fa-shipping-fast"></i>    fast delivery</h3>
                <p>We provide fast delivery in all country in the world. Your product is our first priority. If you pay extra delivery coast, you will get your products within 24 hours</p>
            </div>
            <div className='service' data-aos="zoom-in" data-aos-duration="3000" >
                <h3> <i className="fas fa-undo"></i>     10 days replacements</h3>
                <p> ordered products eligible for free replacement, within 10 days of delivery, in an unlikely event of damaged, defective or different item delivered to you </p>
            </div>
            <div className='service' data-aos="fade-left" data-aos-duration="2000" >
                <h3> <i className="fas fa-headset"></i>    24 x 7 support</h3>
                <p>By Artificial Intelligences we provide 24 x 7 customer support. From any place or any time you get support from our intelligences team. </p>
            </div>
        </div>
    );
};

export default Service;