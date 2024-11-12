import { Helmet } from 'react-helmet-async';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { LiaEyeSolid, LiaEyeSlashSolid } from 'react-icons/lia';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../Utility/firebase.init';
import { useState } from 'react';

const Register = () => {
  // Use State for Error message
  const [erroR, setErroR] = useState('');
  // Use State for success message
  const [success, setSuccess] = useState(false);
  // Use State for show password message
  const [showPass, setShowPass] = useState(false);

  // Handle login form function
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const terms = event.target.terms.checked;
    console.log(email, password, terms);

    // Reset error default
    setErroR('');
    setSuccess(false);

    // Minimum password length 6
    if (password.length < 6) {
      setErroR('Password need at least');
      return;
    }

    // For accept website terms & polici
    if (!terms) {
      setErroR('Please accept our terms & conditions');
      return;
    }

    // Conditional Password for strong unbreakable password
    const passwordRegEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegEx.test(password)) {
      setErroR(
        'At lest 1 Capital Letter, 1 Small Letter, 1 Number, 1 Special Character'
      );
      return;
    }

    // Create user function
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser).then(() => {
          toast.success('Verification mail sent!', {
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
        });

        setSuccess(true);
        console.log(userCredential.user);
      })
      .catch((error) => {
        // sign out toast
        toast.error('Email not create', {
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
    // onSubmit form
    <form
      onSubmit={handleRegister}
      className='flex max-w-md flex-col gap-4'
      autoComplete='off'
    >
      <Helmet>
        <title>Firebase Auth | Register</title>
      </Helmet>
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

        {/* show password conditional rendering */}
        <button
          onClick={() => setShowPass(!showPass)}
          className='btn btn-ghost btn-sm absolute right-2 top-9'
        >
          {/* <LiaEyeSolid></LiaEyeSolid> */}
          {showPass ? (
            <LiaEyeSlashSolid></LiaEyeSlashSolid>
          ) : (
            <LiaEyeSolid></LiaEyeSolid>
          )}
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

      {/* Error paragraph message */}
      {erroR && <p className='text-lg text-red-600'>{erroR}</p>}
      {/* {erroR && (
        <p className='text-xl text-red-500'>This email already taken</p>
      )} */}
      {success && <p className='text-lg text-green-500'>Success</p>}
      <p>
        Already have account?{' '}
        <Link to='/login' className='text-blue-500 font-semibold'>
          Log In
        </Link>
      </p>
    </form>
  );
};

export default Register;

// testSubject1@doodle.com Abc@1234
// s12a12saadabir@gmail.com Old: Abc@1234 New: Cba@4321