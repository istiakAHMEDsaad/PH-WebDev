// import React from 'react';

const Watch = ({ watch }) => {
  const { model, price } = watch;
  return (
    <>
      <div className="border p-4 rounded-md mb-2">
        <div>
          <h2 className="text-xl text-teal-400">Watch Name: <span className="text-amber-400">{model}</span></h2>
          <p className="text-lg text-fuchsia-500">Price: <span className="text-red-400">{price}</span></p>
        </div>
      </div>
    </>
  );
};

export default Watch;
