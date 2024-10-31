const SimpleForm = () => {
  const handleSubmited = (event) => {
    event.preventDefault();
    console.log(`Name: ${event.target.name.value}`);
    console.log(`Mail: ${event.target.mail.value}`);
    console.log(`Phone: ${event.target.number.value}`);
  };

  return (
    <div className='space-y-2'>
      <h1 className='text-3xl text-amber-600'>This is form</h1>
      <div className='space-y-2'>
        {/* Form */}
        <form onSubmit={handleSubmited} className='space-y-2'>
          <input
            className='border block px-6 py-1 rounded-[4px]'
            type='text'
            name='name'
            placeholder='Enter name'
          />
          <input
            className='border block px-6 py-1 rounded-[4px]'
            type='email'
            name='mail'
            placeholder='Enter mail'
          />
          <input
            className='border block px-6 py-1 rounded-[4px]'
            type='number'
            name='number'
            placeholder='Enter number'
          />
          <input type='submit' value='Submit' className='block normal-btn' />
        </form>
      </div>
    </div>
  );
};

export default SimpleForm;
