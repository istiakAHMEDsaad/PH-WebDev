// @ts-nocheck
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='mt-5 mb-20'>
      {/* Title */}
      <h2 className='mb-5 text-3xl font-semibold text-red-400 italic underline text-center'>
        Register
      </h2>

      {/* Form container */}
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='lg:order-1 order-2 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <form className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='email'
                className='input input-bordered'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                placeholder='password'
                className='input input-bordered'
                required
              />
            </div>
            
            {/* Register Button */}
            <div className='form-control mt-6'>
              <button className='btn bg-blue-500 text-gray-100'>Register</button>
            </div>
            <small>Already have account? <Link to={'/login'} className='text-violet-700 font-bold hover:underline cursor-pointer'>Login</Link></small>
          </form>
        </div>

        {/* Lottie */}
        <DotLottieReact
          className='lg:order-2 lg:w-96 md:w-80'
          src='https://assets-v2.lottiefiles.com/a/6beb774c-1166-11ee-a6f1-4788c8724adf/hCt60059mY.lottie'
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Register;
