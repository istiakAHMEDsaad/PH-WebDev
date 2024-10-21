//  import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div className='mb-4 space-y-4'>
      <h2 className='text-2xl text-yellow-500'>Added to Cart: {cart.length}</h2>

      <div className='flex flex-col space-y-2'>
        {cart.map((bottle) => (
          <div className='flex space-x-2' key={bottle.id}>
            <img className='w-20' src={bottle.img} alt='bottle images'></img>
            <button
              onClick={() => handleRemoveFromCart(bottle.id)}
              className='border px-4 rounded-md bg-red-600 hover:bg-red-500 transition-all h-10 my-auto'
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

export default Cart;
