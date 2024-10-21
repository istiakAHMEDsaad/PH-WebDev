import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div className='mb-4'>
      <h2 className='text-2xl text-yellow-500'>Added to Cart: {cart.length}</h2>
      <div className='grid grid-flow-col-dense'>
        {cart.map(bottle => <img className='w-20' src={bottle.img} alt='bottle pic'></img>)}
      </div>
    </div>
  );
};

export default Cart;
