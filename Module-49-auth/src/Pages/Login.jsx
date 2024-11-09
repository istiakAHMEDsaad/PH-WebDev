import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import auth from '../Auth/firebase.init';
const Login = () => {
  const provider = new GoogleAuthProvider();

  const handleGooglSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log('Error', error));
  };

  return (
    <div>
      <form className='flex max-w-md flex-col gap-4'>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='email1' value='Your email' />
          </div>
          <TextInput
            id='email1'
            type='email'
            placeholder='name@gmail.com'
            required
          />
        </div>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='password1' value='Your password' />
          </div>
          <TextInput id='password1' type='password' required />
        </div>
        <div className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Label htmlFor='remember'>Remember me</Label>
        </div>
        <Button
          type='submit'
          className='border py-1 hover:bg-gray-200 transition-all'
        >
          Submit
        </Button>
      </form>

      <div>
        <button
          onClick={handleGooglSignIn}
          className='border py-2 px-4 rounded-lg hover:bg-rose-300 transition-all'
        >
          Click me
        </button>
      </div>
    </div>
  );
};

export default Login;
