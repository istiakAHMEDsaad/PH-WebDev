// @ts-nocheck
import { useContext } from "react";
import { ContextAPI } from "../Provider/ContexProvider";
import { Link } from "react-router-dom";


const Home = () => {
    const {handleAddUser} = useContext(ContextAPI);
  return (
    <div>
      <h2 className='text-2xl font-bold'>Simple CURD</h2>
      <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mb-5'>
        <form onSubmit={handleAddUser} className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              placeholder='Name'
              name="name"
              className='input input-bordered'
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              name="email"
              placeholder='Email'
              className='input input-bordered'
              required
            />
            <label className='label'>
              <a href='#' className='label-text-alt link link-hover'>
                Forgot password?
              </a>
            </label>
          </div>
          <div className='form-control mt-6'>
            <button className='btn btn-primary'>Submit</button>
          </div>
        </form>
      </div>
      <Link to={'/users'}><button className="btn  btn-xs btn-warning text-slate-700 font-bold">Show Users</button></Link>
    </div>
  );
};

export default Home;
