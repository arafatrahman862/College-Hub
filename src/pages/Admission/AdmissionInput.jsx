import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const AdmissionInput = () => {

   const handleAddUser = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const address = form.address.value;
    const image = form.image.value;
    const subject = form.subject.value;
    const phone_number = form.phone_number.value;
    const email = form.email.value;
    const date_of_birth = form.date.value;
    const user = {name, address, image,subject, phone_number, email,date_of_birth }
    console.log(user)




    fetch('https://college-server-arafatrahman862.vercel.app/admissions', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
            form.reset()
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Info added successfully.',
                showConfirmButton: false,
                timer: 1500
              })
        }
      
    })



   }

    
   

    return (
        <div data-aos="fade-up">
            <div className="hero min-h-screen  bg-base-200">
  <div className="hero-content flex-col ">
   
    <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
      <form onSubmit={handleAddUser}  className="card-body">
       <div className='grid grid-cols-2 gap-8'>
       <div>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Candidate Name</span>
          </label>
          <input type="text"  name='name' placeholder="name" className="input input-bordered" />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input type="text"  name='subject' placeholder="subject" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Candidate Email</span>
          </label>
          <input type="email"  required name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Candidate Phone number</span>
          </label>
          <input type="number"  name='phone_number' placeholder="phone number" className="input input-bordered" />
        </div>
        </div>
        <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input type="text"  name='address' placeholder="address" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Date of birth</span>
          </label>
          <input type="date"  name='date' placeholder="date of birth" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Image</span>
          </label>
          <input type="text"  name='image' placeholder="image" className="input input-bordered" />
        
        </div>
        </div>
       </div>
        <div className="form-control mt-6">
          <button></button>
          <input className="btn btn-primary" type="submit" value="submit" />
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default AdmissionInput;