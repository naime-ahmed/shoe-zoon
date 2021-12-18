import React from 'react';
import './Blogs.css';

import blogImg1 from '../../../images/blog-img1.png'
import blogImg2 from '../../../images/blog-img2.png'
import blogImg3 from '../../../images/blog-img3.png'
import blogImg4 from '../../../images/blog-img4.png'

const Blogs = () => {
    return (
        <div className='blog-section'>
            <div className='blog-header'>
                <h1>Recent blogs</h1>
            </div>
            <div className='all-blogs'>
                <div className='blog' >
                    <div className='blog-img'>
                        <img src={blogImg1} alt="" />
                    </div>
                    <div className='blog-text'>
                        <h4>TIMBERLAND CLASSIC 6-INCH BOOT</h4>
                        <p>The Timberland boot never wanted to be an icon. A humble, deeply practical work shoe designed for the laborers of New England, the Original Yellow Boot <span>see more...</span></p>
                    </div>
                </div>
                <div className='blog' >
                    <div className='blog-img'>
                        <img src={blogImg2} alt="" />
                    </div>
                    <div className='blog-text'>
                        <h4>CLARKS ORIGINALS DESERT BOOT</h4>
                        <p>Undeterred by the reservations of the old guard, Clark unveiled his creation at the Chicago Show Fair in 1949, where its sleek silhouette and <span>see more...</span></p>
                    </div>
                </div>
                <div className='blog' >
                    <div className='blog-img'>
                        <img src={blogImg3} alt="" />
                    </div>
                    <div className='blog-text'>
                        <h4>COMMON PROJECTS ACHILLES LOW</h4>
                        <p>Not all icons are long-lived. The Common Projects sneaker is little over a decade old, but already the cult tennis shoe has garnered a following to <span>see more...</span></p>
                    </div>
                </div>
                <div className='blog' >
                    <div className='blog-img'>
                        <img src={blogImg4} alt="" />
                    </div>
                    <div className='blog-text'>
                        <h4>CONVERSE CHUCK TAYLOR ALL STAR</h4>
                        <p>The Chuck Taylor All Star recently turned 100 year sold, but the deceptively simple canvas and rubber sneaker feels as fresh as ever. It’s little <span>see more...</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;