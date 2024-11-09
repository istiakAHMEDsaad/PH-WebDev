import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import auth from '../Auth/firebase.init';
import { useState } from 'react';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);

  const handleGooglSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
        toast.success('Login Success!', {
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
      })
      .catch((error) => {
        console.log('Error', error);
        setUser(null);
        toast.error('Somethings wrong!', {
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
  };

  const handleGooglSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success('Log out successfully!', {
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
        setUser(null);
      })
      .catch((error) => {
        toast.error('Somethings wrong!', {
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
        console.log('Error', error);
      });
  };
  const { displayName, email, photoURL } = user || {};

  return (
    <div className='flex flex-col gap-y-10'>
      {/* ==========> Form <========== */}
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
          className='text-black border py-1 hover:bg-gray-200 transition-all'
        >
          Submit
        </Button>
      </form>

      {/* ==========> Button <========== */}
      <div className='border-2 border-dashed border-gray-500 rounded-md space-y-5'>
        {user && (
          <div className='flex flex-col'>
            <div>
              <img src={photoURL} alt='' />
            </div>
            <h4 className='text-2xl font-bold'>
              Display Name: <span className='font-normal'>{displayName}</span>
            </h4>
            <p className='text-2xl'>
              Email: <span className='font-normal'>{email}</span>
            </p>
          </div>
        )}

        {user ? (
          <button
            onClick={handleGooglSignOut}
            className='border py-2 px-4 rounded-lg bg-rose-500 text-white font-medium hover:bg-rose-500/90 active:scale-95 transition-all '
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={handleGooglSignIn}
            className='border py-2 px-4 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-500/90 active:scale-95 transition-all '
          >
            Click me
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
