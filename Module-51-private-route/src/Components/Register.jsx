import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Routes/RouteProvider';
import { toast, Slide } from 'react-toastify';

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    // const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result);
        toast.success('Account Created!', {
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
      })
      .catch((error) => {
        console.log(error);
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
      });
    /* createUser(email, password).then(result => {
          console.log(result)
          toast.success('Account Created!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
            });
        }).catch(error => {
          console.log(error)
          toast.error('Somethins wrong!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
            });
        }) */
    // console.log('info', name, email, password);
  };

  return (
    <form
      onSubmit={handleRegister}
      className='flex max-w-md flex-col gap-4 mb-5'
      autoComplete='off'
    >
      <Helmet>
        <title>Private Route | Register</title>
      </Helmet>

      {/* ---------- Name ---------- */}
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='name1' value='Enter yout name' />
        </div>
        <TextInput
          id='name1'
          type='text'
          placeholder='Name'
          name='name'
          shadow
        />
      </div>

      {/* ---------- Email ---------- */}
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='email2' value='Your email' />
        </div>
        <TextInput
          id='email2'
          type='email'
          placeholder='Email'
          name='email'
          required
          shadow
        />
      </div>

      {/* ---------- Password ---------- */}
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='password2' value='Your password' />
        </div>
        <TextInput
          id='password2'
          type='password'
          placeholder='Password'
          name='password'
          required
          shadow
        />
      </div>

      {/* ---------- Repeat Password ---------- */}
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='repeat-password' value='Repeat password' />
        </div>
        <TextInput
          id='repeat-password'
          type='password'
          placeholder='Confirm Password'
          required
          shadow
        />
      </div>

      {/* ---------- Terms and conditions ---------- */}
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

      {/* ---------- Button ---------- */}
      <Button type='submit'>Register new account</Button>

      {/* ---------- Already got account? ---------- */}
      <p className='text-gray-600'>
        Already have an account? Please{' '}
        <Link
          to='/login'
          className='text-blue-600 hover:text-blue-500 font-bold'
        >
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;

/**
 * hanjiyaFour@doodle.com 123456
 */
