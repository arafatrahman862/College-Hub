import React, {  useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Admission = () => {
    const [colleges, setColleges] = useState([]);
    useEffect(()=>{
        fetch('https://college-server-arafatrahman862.vercel.app/college')
        .then(res => res.json())
        .then(data =>{
            setColleges(data)
        })
    },[])
    
    return (
        <div  className="overflow-x-auto">
           <Helmet>
                <title>College Hub | Admission</title>
            </Helmet>
            <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Button</th>
        
        
      </tr>
    </thead>
    <tbody>
     {
        colleges.map((college, index)=><tr
        key={index}
        >
        <th>{index + 1}</th>
        <td>{college.college_name}</td>
        <td><Link to="/admissionInput"><button  className='btn'>Select</button></Link></td>
       
      </tr>)
     }
      
    
    </tbody>
  </table>
        </div>
    );
};

export default Admission;















// import { Link,  } from 'react-router-dom';


// const Admission = () => {
//     // const {user} = useContext(AuthContext);
//     // const navigate = useNavigate();
//     // const location = useLocation();
//     const [colleges, setColleges] = useState([]);
//     useEffect(()=>{
//         fetch('https://college-server-arafatrahman862.vercel.app/college')
//         .then(res => res.json())
//         .then(data =>{
//             setColleges(data)
//         })
//     },[])

// // const handleAddCollege = college =>{
// //     console.log(college)
// //     if(user){
// //         fetch('localhost:5000/admissions', {
// //             method: 'POST',
// //             headers: {
// //                 'content-type': 'application/json'
// //             },
// //             body: JSON.stringify(cartItem)
// //         })
// //         .then(res => res.json())
// //         .then(data => {
// //             if(data.insertedId){
                
// //                 Swal.fire({
// //                     position: 'top-end',
// //                     icon: 'success',
// //                     title: 'College added.',
// //                     showConfirmButton: false,
// //                     timer: 1500
// //                   })
// //             }
// //         })
// //     }
// //     else{
// //         Swal.fire({
// //             title: 'Please login to add College',
// //             icon: 'warning',
// //             showCancelButton: true,
// //             confirmButtonColor: '#3085d6',
// //             cancelButtonColor: '#d33',
// //             confirmButtonText: 'Login now!'
// //           }).then((result) => {
// //             if (result.isConfirmed) {
// //               navigate('/login', {state: {from: location}})
// //             }
// //           })
// //     }
// // }
    
//     return (
//         <div>
//             <div >
//   <table className="table">
//     {/* head */}
//     <thead>
//       <tr>
//         <th>#</th>
//         <th>Name</th>
//         <th>Button</th>
        
        
//       </tr>
//     </thead>
//     <tbody>
//      {
//         colleges.map((college, index)=><tr
//         key={index}
//         >
//         <th>{index + 1}</th>
//         <td>{college.college_name}</td>
//         <td><Link to="/admissionInput"><button  className='btn'>Select</button></Link></td>
//         {/* onClick={()=> handleAddCollege(college)} */}
//       </tr>)
//      }
      
    
//     </tbody>
//   </table>
// </div>
//         </div>
//     );
// };

// export default Admission;