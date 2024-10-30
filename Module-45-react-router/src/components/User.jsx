import PropTypes from 'prop-types';

const User = ({ user }) => {
  const { name, username, phone } = user;
  return (
    <div className='border-2 border-fuchsia-400 rounded-md p-5 bg-stone-300 hover:bg-slate-300'>
      <h2 className='text-blue-500 text-lg'>
        Employee name: <span className='text-black italic'>{name}</span>
      </h2>
      <p className='text-pink-500'>
        Username: <span className='text-black italic'>{username}</span>
      </p>
      <p className='text-amber-600'>Phone: <span className='text-black italic'>{phone}</span></p>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};
export default User;
