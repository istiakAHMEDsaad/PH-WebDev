import { useEffect, useState } from 'react';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/user')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h4>The number of user is {users?.length}</h4>
        <div
          style={{
            border: '1px solid skyblue',
            borderRadius: '0.5rem',
            boxShadow: '0.0rem 0.0rem 0.2rem 0.0rem lightblue',
            padding: "1.2rem"
          }}
        >
          {users?.map(data=> <div key={data.id}>
            <h2>Name: {data.name}</h2>
            <p>Email: {data.email}</p>
          </div>)}
      </div>
    </div>
  );
};

export default Home;
