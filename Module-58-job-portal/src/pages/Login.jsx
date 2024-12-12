import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Login = () => {
  return (
    <>
    <h2 className='my-2 text-3xl italic text-blue-400 underline font-semibold text-center'>Login</h2>
    <div className='flex flex-col md:flex-row justify-center items-center mb-16'>
      <div className='order-2 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
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
            <label className='label'>
              <a href='#' className='label-text-alt link link-hover'>
                Forgot password?
              </a>
            </label>
          </div>
          <div className='form-control mt-6'>
            <button className='btn btn-primary'>Login</button>
          </div>
        </form>
      </div>
      <DotLottieReact className='order-1 lg:w-96' src='https://assets-v2.lottiefiles.com/a/bb54d73c-1176-11ee-b97c-7f390a4ae5dc/hyATkYpEVL.lottie' loop autoplay />
    </div>
    </>
  );
};

export default Login;
