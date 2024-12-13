// @ts-nocheck
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../provider/AuthContext';
import { toast, Slide } from 'react-toastify';


const Login = () => {
  const {loginUser} = useContext(AuthContext);
  const navigate = useNavigate();


  const handleLogin = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const email = form.get('email');
    const password = form.get('password');
    const userInfo = {email, password};

    loginUser(email,password)
    .then(userCredential=>{
      const user = userCredential.user;
      if(user){
        toast.success('Login Successfully!', {
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Slide,
        });
        navigate('/');
      }
    })
    .catch(error=>{
      const errorCode = error.code;
      if(errorCode){
        toast.error('Something Wrong!', {
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Slide,
        });
      }
      const errorMessage = error.message;
      console.error(errorMessage);
    })
  }
  
  return (
    <>
      {/* Login Text */}
      <h2 className='my-2 text-3xl italic text-blue-400 underline font-semibold text-center'>
        Login
      </h2>

      <div className='flex flex-col md:flex-row justify-center items-center mb-16'>
        {/* Form Card */}
        <div className='order-2 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <form onSubmit={handleLogin} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                name='email'
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
                name='password'
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

            {/* Login Button */}
            <div className='form-control mt-6'>
              <button className='btn bg-blue-500 text-gray-100'>Login</button>
            </div>
            <small className='text-gray-500'>
              New to this website?{' '}
              <Link to={'/register'} className='text-violet-700 font-bold hover:underline cursor-pointer'>
                Register
              </Link>
            </small>
          </form>
        </div>

        <DotLottieReact
          className='order-1 lg:w-96'
          src='https://assets-v2.lottiefiles.com/a/bb54d73c-1176-11ee-b97c-7f390a4ae5dc/hyATkYpEVL.lottie'
          loop
          autoplay
        />
      </div>
    </>
  );
};

export default Login;
