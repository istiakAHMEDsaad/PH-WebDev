import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Routes/RouteProvider';
import { toast, Slide } from 'react-toastify';

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  // Handle Login Function
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        toast.success('Log In!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Slide,
        });
        console.log(result);
      })
      .catch((error) => {
        toast.error('Somethins wrong!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Slide,
        });
        console.log(error);
      });
    // console.log('info:', email, password);
  };

  return (
    <form
      onSubmit={handleLogin}
      className='flex max-w-md flex-col gap-4 mb-5'
      autoComplete='off'
    >
      <Helmet>
        <title>Private Route | Login</title>
      </Helmet>

      {/* ----------> Email <---------- */}
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='email1' value='Your email' />
        </div>
        <TextInput
          id='email1'
          type='email'
          name='email'
          placeholder='Email'
          required
        />
      </div>

      {/* ----------> Password <---------- */}
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='password1' value='Your password' />
        </div>
        <TextInput
          id='password1'
          type='password'
          name='password'
          placeholder='Password'
          required
        />
      </div>

      {/* ----------> Forget password <---------- */}
      <div>
        <small className='hover:underline cursor-pointer text-gray-600 hover:text-gray-500'>
          Forget Password
        </small>
      </div>

      {/* ----------> Remember me <---------- */}
      <div className='flex items-center gap-2'>
        <Checkbox id='remember' />
        <Label htmlFor='remember'>Remember me</Label>
      </div>

      {/* ----------> Submit Button <---------- */}
      <Button type='submit'>Submit</Button>

      {/* ----------> New? <---------- */}
      <p className='text-gray-600'>
        New to this website? Please{' '}
        <Link
          to='/register'
          className='text-blue-600 font-bold hover:text-blue-500'
        >
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
