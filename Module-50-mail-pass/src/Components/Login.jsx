import { Helmet } from 'react-helmet-async';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../Utility/firebase.init';
import { toast, Bounce } from 'react-toastify';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [succesS, setSuccesS] = useState(false);
  const [loginFail, setLoginFail] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    setSuccesS(false);
    setLoginFail('');
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSuccesS(true);
        toast.success('Sign In', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Bounce,
        });
        console.log(userCredential.user);
      })
      .catch((error) => {
        setLoginFail(error.message);
        toast.warn('Account not found', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Bounce,
        });
        console.log(error.message);
      });
    // console.log(email, password);
  };

  return (
    <form
      className='flex max-w-md flex-col gap-4'
      autoComplete='off'
      onSubmit={handleLogin}
    >
      <Helmet>
        <title>Firebase Auth | Login</title>
      </Helmet>
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='email1' value='Your email' />
        </div>
        <TextInput
          id='email1'
          type='email'
          name='email'
          placeholder='name@mail.com'
          required
        />
      </div>
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='password1' value='Your password' />
        </div>
        <TextInput id='password1' type='password' name='password' required />
      </div>
      <div className='flex items-center gap-2'>
        <Checkbox id='remember' />
        <Label htmlFor='remember'>Remember me</Label>
      </div>
      <Button type='submit'>Submit</Button>
      {
        succesS && <p className='text-lg text-red-500'>User Login Successful</p>
      }{
        loginFail && <p className='text-lg text-red-500'>{loginFail}</p>
      }
      <p>Please sign up for new user <Link to='/register' className='text-blue-500 font-semibold'>Sign Up</Link></p>
    </form>
  );
};

export default Login;
