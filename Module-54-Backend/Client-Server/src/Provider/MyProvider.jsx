// @ts-nocheck
import { createContext,  useState } from 'react';
import PropTypes from 'prop-types';


export const serverProvider = createContext(null);
const MyProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const userObj = { name, email };
    // console.log(`User as an object ${userObj}`);
    fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userObj),
    })
      .then((res) => res.json())
      .then((data) => console.log(`responsed data ${data}`))
      .catch((err) => console.error(err));
  };

  const myValue = {
    handleAddUser,
    users,
    setUsers,
  };

  return (
    <serverProvider.Provider value={myValue}>
      {children}
    </serverProvider.Provider>
  );
};

MyProvider.propTypes = {
  children: PropTypes.object.isRequired,
}

export default MyProvider;
