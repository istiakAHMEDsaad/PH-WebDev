import PropTypes from 'prop-types';

const ReuseableForm = ({ formTitle, submitBtn = 'Submit', handleSubmited, children }) => {
  
  const handleLocalSubmit = (event) => {
    event.preventDefault();
    const data = {
        name: event.target.name.value,
        email: event.target.mail.value,
        password: event.target.password.value,
    }
    handleSubmited(data);
  }

    return (
    <div className='space-y-2'>
      <h1 className=''>{children}</h1>
      <div className='space-y-2'>
        {/* Form */}
        <form onSubmit={handleLocalSubmit} className='space-y-2' autoComplete='off'>
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
            type='password'
            name='password'
            placeholder='Enter password' required
          />
          <input type='submit' value={submitBtn} className='block normal-btn' />
        </form>
      </div>
    </div>
  );
};

ReuseableForm.propTypes = {
  formTitle: PropTypes.object.isRequired,
  submitBtn: PropTypes.string.isRequired,
  handleSubmited: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};

export default ReuseableForm;
