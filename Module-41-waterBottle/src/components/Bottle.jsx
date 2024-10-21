import React from 'react';

const Bottle = ({bottle}) => {
    const {category, name, ratings, img, price} = bottle;
    return (
        <div className='border border-dotted rounded-md text-xl text-left flex flex-col justify-center gap-y-2 p-5'>
            <div className='w-auto'>
                <img className='w-full object-cover' src={img} alt={category} />
            </div>
            <p>Name: <span>{name}</span></p>
            <p className=''>Category: <span>{category}</span></p>
            <p>Ratings: <span>{ratings}</span></p>
            <p>Price: <span>${price}</span></p>
        </div>
    );
};

export default Bottle;