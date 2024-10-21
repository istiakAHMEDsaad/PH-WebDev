// import React from 'react';
import PropTypes from "prop-types";
const Bottle = ({ bottle, handleAddToCart }) => {
  const { category, name, ratings, img, price } = bottle;
    // console.log(bottle);

  return (
    <div className='border border-dotted rounded-md text-xl text-left flex flex-col justify-center gap-y-2 p-5'>
      <div className='w-auto'>
        <img className='w-full object-cover' src={img} alt={category} />
      </div>
      <p>
        Name: <span>{name}</span>
      </p>
      <p className=''>
        Category: <span>{category}</span>
      </p>
      <p>
        Ratings: <span>{ratings}</span>
      </p>
      <p>
        Price: <span>${price}</span>
      </p>
      <hr className='border-2 border-dashed w-full mb-1' />
      <button onClick={() => handleAddToCart(bottle)} className='text-xl py-3 border rounded-md bg-neutral-900 hover:bg-neutral-800 transition-all'>
        Purchase
      </button>
    </div>
  );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
}

export default Bottle;
