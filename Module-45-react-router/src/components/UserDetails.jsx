import { useLoaderData, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserDetails = () => {
  const user = useLoaderData();
  const { name, username, email, address, phone, website, company } = user;
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className='border-2 border-gray-400 p-5 '>
      <div className='border border-emerald-400 p-2 rounded-md bg-lime-100 text-lg text-red-500'>
        <h2 className='font-bold'>
          Name: <span className='font-normal text-gray-500'>{name}</span>
        </h2>
        <p className='font-bold'>
          Username:{' '}
          <span className='font-normal text-gray-500'>{username}</span>
        </p>
        <p className='font-bold'>
          Email: <span className='font-normal text-gray-500'>{email}</span>
        </p>
        <div className='font-bold'>
          <p>Address --&gt;</p>
          <p>
            City:{' '}
            <span className='font-normal text-gray-500'>{address.city}</span>
          </p>
          <p>
            Street:{' '}
            <span className='font-normal text-gray-500'>{address.street}</span>
          </p>
        </div>
        <p className='font-bold'>
          Phone: <span className='font-normal text-gray-500'>{phone}</span>
        </p>
        <p className='font-bold'>
          Website: <span className='font-normal text-gray-500'>{website}</span>
        </p>
        <p className='font-bold'>
          Company:{' '}
          <span className='font-normal text-gray-500'>{company.name}</span>
        </p>
      </div>
      <button
        onClick={handleGoBack}
        className='px-3 py-1 bg-green-600 hover:bg-green-500 transition-all rounded-[4px]'
      >
        Go back
      </button>
    </div>
  );
};

UserDetails.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UserDetails;
