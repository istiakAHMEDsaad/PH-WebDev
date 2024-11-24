// @ts-nocheck
import { useContext, useEffect } from 'react';
import { serverProvider } from '../Provider/MyProvider';
import PropTypes from 'prop-types';


const Home = () => {
  const { handleAddUser, users, setUsers } = useContext(serverProvider);



  useEffect(() => {
    fetch('http://localhost:3000/user')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, [setUsers]);

  return (
    <div>
      <h4>The number of user is {users?.length}</h4>
      <form
        onSubmit={handleAddUser}
        
      >
        <input type='text' name='name' />
        <input type='email' name='email' />
        <input type='submit' value='Add User' />
      </form>

      <div
        style={{
          border: '1px solid skyblue',
          borderRadius: '0.5rem',
          boxShadow: '0.0rem 0.0rem 0.2rem 0.0rem lightblue',
          padding: '1.2rem',
        }}
      >
        {users?.map((data) => (
          <div key={data.id}>
            <h2>Name: {data.name}</h2>
            <p>Email: {data.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {
    handleAddUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    setUsers: PropTypes.object.isRequired,
}

export default Home;
