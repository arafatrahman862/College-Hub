import React, { useEffect, useState } from 'react';
import AllCollegeDetail from './AllCollegeDetail';
import { Helmet } from 'react-helmet-async';

const Colleges = () => {
    const [colleges, setColleges] = useState([]);
    useEffect(()=>{
        fetch('https://college-server-arafatrahman862.vercel.app/college')
        .then(res => res.json())
        .then(data =>{
            setColleges(data)
        })
    },[])
    return (
        <div >
             <Helmet>
                <title>College Hub | Colleges</title>
            </Helmet>
            <p className='text-5xl text-center pt-12 text-green-500 '>Colleges</p>
       <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-2 mb-12 pt-20'>
       {
            colleges.map(college => <AllCollegeDetail
            college={college}
            key={college._id}
            >

            </AllCollegeDetail>)
        }
       </div>
    </div>
    );
};

export default Colleges;