import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCardDetails = ({ college }) => {
    const {college_name, college_image, admission_dates, events, research_history, sports, _id} = college;
    return (
        <div data-aos="zoom-in">
            <div className="card w-full bg-base-100 h-full shadow-xl">
                <figure><img className='w-full p-3 rounded-lg' src={college_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-green-500 text-3xl">{college_name}</h2>
                    <p className='text-xl text-orange-400'>Admission Dates:</p>
                    <ul>
                        <li>Fall: {admission_dates.fall}</li>
                        <li>Spring: {admission_dates.spring}</li>
                        <li>Summer: {admission_dates.summer}</li>
                    </ul>
                    <p className='text-xl text-orange-400'>Events:</p>
                    <ul>
                        <li>{events[0]}</li>
                        <li>{events[1]}</li>
                        
                        
                    </ul>
                    <p className='text-xl text-orange-400'>Research History:</p>
                    <p>{research_history}</p>
                    <p className='text-xl text-orange-400'>Sports:</p>
                    <ul>
                        <li>{sports[0]}</li>
                        <li>{sports[1]}</li>
                    </ul>
                    <div className="card-actions justify-end">
                        <Link to={`/collegedetails/${_id}`}><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeCardDetails;