// @ts-nocheck
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast, Slide } from 'react-toastify';

export const ContextAPI = createContext(null);
const ContexProvider = ({ children }) => {
  const { dbData, setDbData } = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/users/')
      .then((result) => result.json())
      .then((data) => setDbData(data))
      .catch((error) => console.error(error));
  }, [setDbData]);

  const handleAddUser = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const email = form.get('email');
    const password = form.get('password');

    const user = { email, password };
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

  const value = {
    handleAddUser,
    dbData,
  };

  return <ContextAPI.Provider value={value}>{children}</ContextAPI.Provider>;
};

ContexProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ContexProvider;
