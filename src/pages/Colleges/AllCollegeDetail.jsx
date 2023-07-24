import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const AllCollegeDetail = ({ college }) => {
    const { college_name, college_image,rating,no_of_research, admission_dates, events, research_history, sports, _id } = college;
    return (
        <div data-aos="zoom-in-down">
            <div className="card w-full h-[100%]  bg-base-100  shadow-xl">
                <figure><img className='w-full p-3 rounded-lg' src={college_image} alt="Shoes" /></figure>
                <div className="card-body  ">
                    <h2 className="card-title">{college_name}</h2>
                    <div className='flex'>
                    <p>Rating </p>
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        readOnly
                    />
                    </div>


                    <p>Admission Dates:</p>
                    <ul>
                        <li>Fall: {admission_dates.fall}</li>
                        <li>Spring: {admission_dates.spring}</li>
                        <li>Summer: {admission_dates.summer}</li>
                    </ul>
                   <p>No Of Research: {no_of_research}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/singlecollege/${_id}`}><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCollegeDetail;