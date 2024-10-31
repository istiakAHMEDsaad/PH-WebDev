import useInputState from "../hooks/useinputState";

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('default name');
    const emailState = useInputState('default name');
    const handleSubmited = (event) => {
        event.preventDefault();
        console.log('form data:', emailState.value);
    }

  return (
    <div className='space-y-2'>
      <h1 className='text-3xl text-amber-600'>This is form</h1>
      <div className='space-y-2'>
        {/* Form */}
        <form onSubmit={handleSubmited} className='space-y-2'>
          <input
            className='border block px-6 py-1 rounded-[4px]'
            value={name}
            onChange={handleNameChange}
            type='text'
            name='name'
            placeholder='Enter name'
          />
          <input
            className='border block px-6 py-1 rounded-[4px]'
            {...emailState}
            name='mail'
            placeholder='Enter mail'
          />
          <input
            className='border block px-6 py-1 rounded-[4px]'
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

export default HookForm;
