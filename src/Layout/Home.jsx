import React from 'react';
import CollegeCard from '../pages/college card/CollegeCard';
import Galary from '../pages/image galary/Galary';
import Review from '../pages/review/Review';
import { Helmet } from 'react-helmet-async';



const Home = () => {
    return (
        <div data-aos="zoom-in-up">
             <Helmet>
                <title>College Hub | Home</title>
            </Helmet>
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://www.webfulcreations.com/html-templates/education-buddy/assets/images/help/background-effect-1.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-left text-neutral-content">
                        <div className="max-w-md">
                            
                            <h1 className="mb-5 text-6xl font-bold  text-orange-400"><span className='text-7xl text-amber-700'>Excellent</span> <span className='text-lime-400 '>college services</span> and facilities</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                           
                        </div>
                    </div>
                </div>
            </div>
            <CollegeCard></CollegeCard>
            <Galary></Galary>
            <Review></Review>
        </div>
    );
};

export default Home;