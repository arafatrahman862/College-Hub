import React, { useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';

const Review = () => {

    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch('https://college-server-arafatrahman862.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])


    return (
        <div data-aos="zoom-in">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='flex flex-col items-center my-16 mx-24'>
                        <h3 className='text-4xl text-orange-400 pb-3'>{review.name}</h3>
                            <Rating
                                style={{ maxWidth: 140 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className='py-8'>{review.details}</p>
                            
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Review;