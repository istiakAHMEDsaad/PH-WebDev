// @ts-nocheck
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast, Slide } from 'react-toastify';

export const ContextAPI = createContext(null);
const ContexProvider = ({ children }) => {
  const [dbData, setDbData] = useState([]);

  //? ------------------------ Fetch API ------------------------
  useEffect(() => {
    fetch('http://localhost:3000/users/')
      .then((res) => res.json())
      .then((data) => setDbData(data))
      .catch((err) => console.error(err));
  }, [setDbData]);


  //? ------------------------ Add User ------------------------
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const name = form.get('name');
    const email = form.get('email');

    const user = { name, email };
    console.log(user);
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success('User Added Successfully!', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Slide,
          });
          form.reset();
        }
      });
  };

  //? ------------------------ Delete User ------------------------

  const handleDelteUser = (_id) => {
    console.log(`Delete: ${_id}`);
    fetch(`http://localhost:3000/users/${_id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success('User Deleted Successfully!', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Slide,
          });
          const remaining = dbData.filter((user) => user._id !== _id);
          setDbData(remaining);
        }
      })
      .catch((err) => console.error(err));
  };

  

  const value = {
    handleAddUser,
    dbData,
    handleDelteUser,

  };

  return <ContextAPI.Provider value={value}>{children}</ContextAPI.Provider>;
};

ContexProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ContexProvider;
