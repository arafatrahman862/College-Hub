import React from 'react';
import ReviewInput from '../review/ReviewInput';
import { Helmet } from 'react-helmet-async';

const MyCollege = () => {
    return (
        <div data-aos="fade-left">
            <Helmet>
                <title>College Hub | My College</title>
            </Helmet>
           <ReviewInput></ReviewInput>
        </div>
    );
};

export default MyCollege;