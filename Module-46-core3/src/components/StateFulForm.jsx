import React, { useState } from 'react';

const StateFulForm = () => {
    const [err, setErr] = useState('');
  const handleSubmited = (event) => {
    event.preventDefault();
    if(pass.length < 6){
        setErr('Character must be 6 characters');
    }else{
        setErr('');
    }
  };

  const [email, setEmail] = useState(null);
  const handleEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const [name, setName] = useState(null);
  const handleNameChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const [pass, setPass] = useState(null);
  const handlePassCng = (event) => {
    event.preventDefault();
    setPass(event.target.value);
  };

  return (
    <div className='space-y-2'>
      <h1 className='text-3xl text-amber-600'>This is form</h1>
      <div className='space-y-2'>
        {/* Form */}
        <form onSubmit={handleSubmited} className='space-y-2'>
          <input
            className='border block px-6 py-1 rounded-[4px]'
            onChange={handleEmailChange}
            type='email'
            name='username'
            placeholder='Your username'
          />
          <input
            className='border block px-6 py-1 rounded-[4px]'
            onSubmit={handleNameChange}
            type='number'
            name='phonenumber'
            placeholder='Phone numbers'
          />
          <input
            className='border block px-6 py-1 rounded-[4px]'
            onSubmit={handlePassCng}
            type='password'
            name='password'
            placeholder='Enter number'
            required
          />
          <input type='submit' value='Submit' className='block normal-btn' />
          {
            err && <p>{err}</p>
          }
        </form>
      </div>
    </div>
  );
};

export default StateFulForm;
