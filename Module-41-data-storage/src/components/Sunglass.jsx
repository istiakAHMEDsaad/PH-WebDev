// import React from 'react';

import { add, multiply, divideTheFirstNumberByTheSecondNumber as divide } from './Utility/calculate';

const Sunglass = () => {
  const first = 1300;
  const second = 900;
  const sum = add(first, second);
  const multi = multiply(first, second);
  const vag = divide(first, second);
  return (
    <div className='border border-zinc-500 rounded-md mt-4 p-5'>
      <h2>This sunglass (1300 + 900): {sum}</h2>
      <h2>Both price (1300 * 900): {multi}</h2>
      <h2>Separate price (1300 / 900): {vag}</h2>
    </div>
  );
};

export default Sunglass;
