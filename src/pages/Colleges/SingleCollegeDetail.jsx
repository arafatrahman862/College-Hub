import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCollegeDetail = () => {
    const college = useLoaderData();
    const { college_name, rating, no_of_research, admission_dates, college_image, admission_process, events_details, events, research_works, sports_categories } = college;

    return (
        <div data-aos="zoom-in-down" className='mx-4'>
            <p className='text-5xl text-center pt-12 text-green-500 '>College Details</p>
            <div className='py-20 px-3'>
                <img className='w-[80%] lg:ml-24 object-cover  p-3 rounded-lg' src={college_image} alt="Shoes" />
                <div className="font-semibold text-6xl pt-12 pb-4 text-center text-green-600">{college_name}</div>
                <div className='flex justify-center items-center pb-8'>
                            <p className='text-2xl mr-6 text-red-500'>Rating </p>
                            <Rating
                                style={{ maxWidth: 120 }}
                                value={rating}
                                readOnly
                            />
                        </div>
                <div className='lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-1 '>
                    <div>
                       


                        <p className='text-2xl py-3 text-orange-400'>Admission Dates:</p>
                        <ul>
                            <li>Fall: {admission_dates.fall}</li>
                            <li>Spring: {admission_dates.spring}</li>
                            <li>Summer: {admission_dates.summer}</li>
                        </ul>
                        <p className='text-2xl py-3 text-orange-400'>No Of Research: {no_of_research}</p>
                        <p className='text-2xl py-3 text-orange-400'>Events Details:</p>
                        <p>{events_details.Orientation_Day}</p>
                        <p>{events_details.Annual_Cultural_Fest}</p>
                        <p>{events_details.Career_Fair}</p>
                    </div>
                    <div>

                        <p className='text-2xl py-3 text-orange-400'>Sports Categories:</p>
                        <p className='text-xl py-3 text-orange-400'>Team Sports:</p>
                        <p>1. {sports_categories.team_sports[0]}</p>
                        <p>2. {sports_categories.team_sports[1]}</p>
                        <p>3. {sports_categories.team_sports[2]}</p>
                        <p className='text-xl py-3 text-orange-400'>Individual Sports:</p>
                        <p>1. {sports_categories.individual_sports[0]}</p>
                        <p>2. {sports_categories.individual_sports[1]}</p>
                        <p>3. {sports_categories.individual_sports[2]}</p>
                        <p className='text-xl py-3 text-orange-400'>Intramural Sports:</p>
                        <p>1. {sports_categories.intramural_sports[0]}</p>
                        <p>2. {sports_categories.intramural_sports[1]}</p>
                        <p>3. {sports_categories.intramural_sports[2]}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCollegeDetail;