import { Helmet } from 'react-helmet-async';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { LiaEyeSolid, LiaEyeSlashSolid  } from 'react-icons/lia';

import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../Utility/firebase.init';
import { useState } from 'react';

const Register = () => {
  const [erroR, setErroR] = useState('');
  const [success, setSuccess] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const terms = event.target.terms.checked;
    console.log(email, password, terms);

    // Reset error
    setErroR('');
    setSuccess(false);

    if (password.length > 6) {
      setErroR('Password need at least');
      return;
    }

    if(!terms){
      setErroR('Please accept our terms & conditions');
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
      <div className='relative'>
        <div className='mb-2 block'>
          <Label htmlFor='password2' value='Your password' />
        </div>
        <TextInput
          id='password2'
          type={showPass ? 'text' : 'password'}
          name='password'
          required
          shadow
        />
        <button onClick={() => setShowPass(!showPass)} className='btn btn-ghost btn-sm absolute right-2 top-9'>
          {/* <LiaEyeSolid></LiaEyeSolid> */}
          {showPass ? <LiaEyeSlashSolid></LiaEyeSlashSolid> : <LiaEyeSolid></LiaEyeSolid>}
        </button>
      </div>
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='repeat-password' value='Repeat password' />
        </div>
        <TextInput id='repeat-password' type='password' required shadow />
      </div>
      <div className='flex items-center gap-2'>
        <Checkbox id='agree' name='terms' />
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
