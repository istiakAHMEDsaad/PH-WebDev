import { Helmet } from 'react-helmet-async';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../Utility/firebase.init';
import { useState } from 'react';

const Register = () => {
  const [erroR, setErroR] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    /* console.log(event.target.email.value);
        console.log(event.target.password.value); */
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    // Reset error
    setErroR('');
    setSuccess(false);

    if (password.length > 6) {
      setErroR('Password need at least');
      return;
    }

    // Conditional Password
    const passwordRegEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegEx.test(password)) {
      setErroR(
        'At lest 1 Capital Letter, 1 Small Letter, 1 Number, 1 Special Character'
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success('Sign Up', {
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
        setSuccess(true);
        console.log(userCredential.user);
      })
      .catch((error) => {
        toast.success('Sign Out', {
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
        setSuccess(false);
        console.error(error);
        setErroR(error.message);
      });
  };

  return (
    <form
      onSubmit={handleRegister}
      className='flex max-w-md flex-col gap-4'
      autoComplete='off'
    >
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='email2' value='Your email' />
        </div>
        <TextInput
          autoComplete='off'
          id='email2'
          type='email'
          name='email'
          placeholder='name@gmail.com'
          required
          shadow
        />
      </div>
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='password2' value='Your password' />
        </div>
        <TextInput
          id='password2'
          type='password'
          name='password'
          required
          shadow
        />
      </div>
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='repeat-password' value='Repeat password' />
        </div>
        <TextInput id='repeat-password' type='password' required shadow />
      </div>
      <div className='flex items-center gap-2'>
        <Checkbox id='agree' />
        <Label htmlFor='agree' className='flex'>
          I agree with the&nbsp;
          <Link
            to='google.com'
            className='text-cyan-600 hover:underline dark:text-cyan-500'
          >
            terms and conditions
          </Link>
        </Label>
      </div>
      <Button type='submit'>Register new account</Button>
      {erroR && <p className='text-lg text-red-600'>{erroR}</p>}
      {/* {erroR && (
        <p className='text-xl text-red-500'>This email already taken</p>
      )} */}
      {success && <p className='text-lg text-green-500'>Success</p>}
    </form>
  );
};

export default Register;
