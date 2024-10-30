import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
  const { id, name, username, phone, email } = user;
  return (
    <div className='border-2 border-fuchsia-400 rounded-md p-5 bg-stone-300 hover:bg-slate-300 flex flex-col justify-between'>
      <h2 className='text-blue-500 text-lg'>
        Employee name: <span className='text-black italic'>{name}</span>
      </h2>
      <p className='text-pink-500 text-lg'>
        Username: <span className='text-black italic'>{username}</span>
      </p>
      <p className='text-amber-600 text-lg'>
        Phone: <span className='text-black italic'>{phone}</span>
      </p>
      <p className='text-yellow-700 text-lg'>
        Mail: <span className='text-black italic'>{email}</span>
      </p>
      <Link to={`/users/${id}`}>
        <button className='border px-3 py-1 rounded-[4px] bg-blue-500 hover:bg-blue-400 transition-all duration-150'>Show Details</button>
      </Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};
export default User;
