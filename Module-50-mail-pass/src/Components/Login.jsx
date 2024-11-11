import { Helmet } from 'react-helmet-async';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);
  };

  return (
    <form className='flex max-w-md flex-col gap-4' autoComplete='off' onSubmit={handleLogin} >
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
      <Button type='submit'>
        Submit
      </Button>
    </form>
  );
};

export default Login;
