import { useEffect, useRef } from 'react';

const RefRorm = () => {
  const mailRef = useRef(null);
  const passRef = useRef(null);
  
  const handleSubmited = (e) => {
    e.preventDefault();
    console.log(mailRef.current.value);
    console.log(passRef.current.value);
  };

  useEffect(() =>{
    mailRef.current.focus();
  } ,[])

  return (
    <div className='space-y-2'>
      <h1 className='text-3xl text-amber-600'>This is form</h1>
      <div className='space-y-2'>
        {/* Form */}
        <form onSubmit={handleSubmited} className='space-y-2'>
          <input
            className='border block px-6 py-1 rounded-[4px]'
            ref={mailRef}
            type='email'
            name='mail'
            placeholder='Enter mail'
            defaultValue={'user@gmail.com'}
            autoComplete='off'
          />
          <input
            className='border block px-6 py-1 rounded-[4px]'
            ref={passRef}
            type='password'
            name='password'
            placeholder='Enter password'
            
          />
          <input type='submit' value='Submit' className='block normal-btn' />
        </form>
      </div>
    </div>
  );
};

export default RefRorm;
