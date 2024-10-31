import React, { useState } from 'react';

const StateFulForm = () => {
  const [err, setErr] = useState('');
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [pass, setPass] = useState(null);

  const handleSubmited = (event) => {
    event.preventDefault();
    
    if (pass.length < 6) {
      setErr('Character must be 6 characters');
    } else {
      setErr('');
      console.log(email, name, pass);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePassCng = (event) => {
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
            placeholder='Email'
          />
          <input
            className='border block px-6 py-1 rounded-[4px]'
            onChange={handleNameChange}
            type='number'
            name='phonenumber'
            placeholder='Number'
          />
          <input
            className='border block px-6 py-1 rounded-[4px]'
            onChange={handlePassCng}
            type='password'
            name='password'
            placeholder='Password'
            required
          />
          <input type='submit' value='Submit' className='block normal-btn' />
          {err && <p>{err}</p>}
        </form>
      </div>
    </div>
  );
};

export default StateFulForm;
