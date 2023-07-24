import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => { })
    .catch(error => console.log(error));
}

const navOpt = 
<>
<NavLink to="/">Home</NavLink>
<NavLink to="/colleges">Colleges</NavLink>
<NavLink to="/admission">Admission</NavLink>
<NavLink to="/mycollege">My College</NavLink>

{
  user ? <>
  <div className='lg:grid lg:grid-cols-2 sm:grid py-2 sm:grid-cols-2 '>
  <div className='w-9'>
  <img className='lg:w-[100%]  rounded-full' src={user?.photoURL} alt="" />
  </div>
  <button onClick={handleLogOut} className='btn btn-ghost'>Log Out</button>
  
  </div>
  </>:<>
  <NavLink to="/login">Login</NavLink>
  </>
}

</>


    return (
        <div data-aos="zoom-in">
            <div className="navbar text-black rounded-md bg-green-400">
  <div className="navbar-start">
    <div className="dropdown ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navOpt}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"><span className='text-3xl text-orange-400'>College</span> <span className='text-3xl text-red-500'>Hub</span></a>
  </div>
  <div className="navbar-center hidden lg:flex  ">
    <ul className="menu menu-horizontal px-1 font-semibold space-x-16">
      {navOpt}
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Navbar;