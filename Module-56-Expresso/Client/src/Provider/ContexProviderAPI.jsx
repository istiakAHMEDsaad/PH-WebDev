// @ts-nocheck
import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast, Bounce } from 'react-toastify';

export const ContexAPI = createContext(null);
const ContexProviderAPI = ({ children }) => {
  // Fetch All Data
  const [coffee, setCoffee] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/add-coffee/')
      .then(res=>res.json())
      .then(data=>setCoffee(data))
      .catch((err) => console.error(err));
  }, []);

  // Add data Function
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const name = form.get('name');
    const chef = form.get('chef');
    const price = form.get('price');
    const taste = form.get('taste');
    const category = form.get('category');
    const details = form.get('details');
    const photo = form.get('photo');
    const newCoffee = { name, chef, price, taste, category, details, photo };
    console.log(newCoffee);

    // Send Data to the server
    fetch('http://localhost:3000/add-coffee', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success('Add to Databse!', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Bounce,
          });
        }

        console.log(data);
        // form.reset();
      })
      .catch((err) => {
        toast.warn('Something Wrong!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Bounce,
        });
        console.error(err);
      });
  };

  const value = {
    handleAddCoffee,
    coffee,
  };

  return <ContexAPI.Provider value={value}>{children}</ContexAPI.Provider>;
};

ContexProviderAPI.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ContexProviderAPI;
//name, supplier, category, chef, taste, details, photo
