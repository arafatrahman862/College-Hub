import React, { useEffect, useState } from 'react';
import CollegeCardDetails from './CollegeCardDetails';

const CollegeCard = () => {
    const [colleges, setColleges] = useState([]);
    useEffect(()=>{
        fetch('https://college-server-arafatrahman862.vercel.app/college')
        .then(res => res.json())
        .then(data =>{
            setColleges(data)
        })
    },[])
    // console.log(colleges)
    return (
        <div  className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-6   py-12'>
            {
                colleges.slice(0, 3).map(college => <CollegeCardDetails
                college={college}
                key={college._id}
                >

                </CollegeCardDetails>)
            }
        </div>
    );
};

export default CollegeCard;