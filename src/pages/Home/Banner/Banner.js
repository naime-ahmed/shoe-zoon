import React from 'react';
import './Banner.css';
import image1 from '../../../images/home-shoe-1.png';
import image5 from '../../../images/home-text-1.png';
// import image2 from '../../../images/home-shoe-2.png';
// import image3 from '../../../images/home-shoe-3.png';
// import image6 from '../../../images/home-text-2.png';
// import image7 from '../../../images/home-text-3.png';


const Banner = () => {
    return (
        <div className="home" id="home">
            

                <div className="slide-container ">
                    <div className="slide">
                        <div className="content">
                            <span>nike's best selling shoes</span>
                            <h3>Air Force 1's</h3>
                            <p>Air Force 1s are Nike is top-selling sneaker of all time. And that is not surprising. Everyone from Jay Z to Kendall Jenner has a relationship with the classic shoe. But the Air Force 1 had a different fate when Nike released it in 1982. In fact, Nike planned to cancel the shoe altogether in 1984. That is until a trio of retailers in Baltimore banned together to extended the life of the beloved basketball sneaker.</p>
                        </div>
                        <div className="image">
                            <img src={image1} className="shoe" alt=""/>
                            <img src={image5} className="text" alt=""/>
                        </div>
                    </div>
                </div>

                {/* <div className="slide-container">
                    <div className="slide">
                        <div className="content">
                            <span>nike blue shoes</span>
                            <h3>nike metcon shoes</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores et eos eaque veritatis aut laboriosam earum dolorem iste atque.</p>
                            
                        </div>
                        <div className="image">
                            <img src={image2} className="shoe" alt=""/>
                            <img src={image6} className="text" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="slide-container">
                    <div className="slide">
                        <div className="content">
                            <span>nike yellow shoes</span>
                            <h3>nike metcon shoes</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores et eos eaque veritatis aut laboriosam earum dolorem iste atque.</p>
                            
                        </div>
                        <div className="image">
                            <img src={image3} className="shoe" alt=""/>
                            <img src={image7} className="text" alt=""/>
                        </div>
                    </div>
                </div> */}
                        
        </div>
    );
};

export default Banner;