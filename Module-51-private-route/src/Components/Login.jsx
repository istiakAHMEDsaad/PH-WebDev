import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Login = () => {
  // Handle Login Function
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log('info:', email, password);
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
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='email1' value='Your email' />
        </div>
        <TextInput
          id='email1'
          type='email'
          name='email'
          placeholder='name@flowbite.com'
          required
        />
      </div>
      <div>
        <div className='mb-2 block'>
          <Label htmlFor='password1' value='Your password' />
        </div>
        <TextInput id='password1' type='password' name='password' required />
      </div>
      <div>
        <small className='hover:underline cursor-pointer text-gray-600 hover:text-gray-500'>
          Forget Password
        </small>
      </div>
      <div className='flex items-center gap-2'>
        <Checkbox id='remember' />
        <Label htmlFor='remember'>Remember me</Label>
      </div>
      <Button type='submit'>Submit</Button>
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
