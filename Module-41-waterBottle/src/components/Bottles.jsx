import React, { useEffect, useState } from 'react';
import Bottle from './Bottle';
import { addToLS, getStoredCart } from './utility/localstorage';
import Cart from './Cart';

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('bottles.json')
      .then((res) => res.json())
      .then((data) => setBottles(data))
      .catch((error) => console.error(error));
  }, []);

  //   TODO(load cart from storage)
  useEffect(() => {
    console.log('called the useEffect', bottles.length);
    if (bottles.length > 0) {
      const storedCart = getStoredCart();
      //   console.log(storedCart);

      const savedCart = [];
      for (const id of storedCart) {
        // console.log(id);
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      //   console.log('saved cart:',savedCart);
      setCart(savedCart);
    }
  }, [bottles]);

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
        </div>
        <div>
          {/* <h2>Shopping Cart: {cart.length}</h2> */}
          <Cart cart={cart}></Cart>
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
