import React from 'react';
import Swal from 'sweetalert2';

const ReviewInput = () => {

    
   const handleAddReview = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const rating = form.rating.value;
    const details = form.details.value;
    
    const user = {name,rating, details }
    console.log(user)




    fetch('https://college-server-arafatrahman862.vercel.app/reviews', {
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
        <div data-aos="zoom-in">
          <p className='text-5xl text-center pt-12 text-green-500 '>Review</p>
            <div className="hero min-h-screen  bg-base-200">
  <div className="hero-content flex-col ">
   
    <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
      <form onSubmit={handleAddReview}  className="card-body">
       <div >
       <div>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"  name='name' placeholder="name" className="input input-bordered" />
        </div>
        
        
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rate us </span>
          </label>
          <input type="number"  name='rating' placeholder="rating" className="input input-bordered" />
        </div>
        </div>
        <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input  type="text"  name='details' placeholder="details" className="input input-bordered" />
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

export default ReviewInput;