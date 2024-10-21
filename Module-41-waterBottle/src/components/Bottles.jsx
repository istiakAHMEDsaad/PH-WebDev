import React, { useEffect, useState } from 'react';
import Bottle from './Bottle';
import { addToLS, getStoredCart } from './utility/localstorage';

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('bottles.json')
      .then((res) => res.json())
      .then((data) => setBottles(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    console.log(storedCart);
  })

  const handleAddToCart = (bottle) => {
    // console.log(bottle.id);
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  };
  return (
    <>
      <div>
        <div>
          <h2 className='text-center text-2xl italic mb-4'>
            Bottle Found: {bottles.length}
          </h2>
          <h2>Shopping Cart: {cart.length}</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {bottles.map((bottle) => (
            <Bottle
              key={bottle.id}
              bottle={bottle}
              handleAddToCart={handleAddToCart}
            ></Bottle>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bottles;
