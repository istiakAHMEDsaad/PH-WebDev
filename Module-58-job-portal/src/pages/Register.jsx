// @ts-nocheck
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../provider/AuthContext';
import { toast, Slide } from 'react-toastify';
import Swal from 'sweetalert2';


const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const email = form.get('email');
    const password = form.get('password');
    const userInfo = { email, password };
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    console.log(userInfo);

    if(password.length < 6){
      toast.warn('Password Must Contain 6 Character!', {
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
      return;
    }else if(!passwordRegex.test(password)){
      Swal.fire({
        text: 'Password must be contain 1 uppercase, 1 lowercase, 1 number, and 1 special character',
        icon: 'warning',
      });
      return;
    }

    //! Create user With firebase
    createUser(email, password)
    .then(userCredential=>{
      const user = userCredential.user;
      if (user) {
        toast.success('Account create successfully!', {
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
    })
    .catch(error=>{
      const errorCode = error.code;
      if(errorCode === 'auth/email-already-in-use'){
        toast.warn('User Already Exist!', {
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
      }else{
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
      console.log(errorMessage);
    })
  };

  return (
    <div className='mt-5 mb-20'>
      {/* Title */}
      <h2 className='mb-5 text-3xl font-semibold text-red-400 italic underline text-center'>
        Register
      </h2>

      {/* Form container */}
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='lg:order-1 order-2 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <form onSubmit={handleRegister} className='card-body'>
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
            </div>

            {/* Register Button */}
            <div className='form-control mt-6'>
              <button className='btn bg-blue-500 text-gray-100'>
                Register
              </button>
            </div>
            <small>
              Already have account?{' '}
              <Link
                to={'/login'}
                className='text-violet-700 font-bold hover:underline cursor-pointer'
              >
                Register
              </Link>
            </small>
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
