import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import User from './User';
import Footer from './Footer';

const Users = () => {
  const users = useLoaderData();
  // console.log(users);
  return (
    <>
    <div >
      <h2 className='underline text-3xl text-center font-bold'>Toatl Employee: {users.length}</h2>
      <p className='text-2xl text-orange-800 font-bold'>Meet our Employee  --&gt;</p>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

Users.propTypes = {
  users: PropTypes.object.isRequired,
};

export default Users;
