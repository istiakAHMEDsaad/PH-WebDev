import PropTypes from 'prop-types';
import { FaCircleCheck } from 'react-icons/fa6';

const PriceOption = ({ option }) => {
  // features also contain array
  const { name, features, price } = option;

  return (
    <div className='border rounded-md shadow-md p-5 space-y-2 bg-cyan-100 flex flex-col justify-between'>
      <h1 className='text-3xl font-semibold'>
        Price: <span className='font-normal text-yellow-400'>${price}/mon</span>
      </h1>

      <p className='text-xl font-semibold'>
        Package: <span className='font-normal text-orange-400'>{name}</span>
      </p>

      <div>
        <span className='text-lg font-semibold'>Feature:</span>
        {features.map((feature, idx) => (
          <p className='text-gray-500 flex items-center gap-x-2' key={idx}>
            <FaCircleCheck className='text-green-500'></FaCircleCheck> {feature}
          </p>
        ))}
      </div>

      <button className='w-full py-3 rounded-lg border bg-emerald-400 font-bold hover:bg-emerald-400/80'>Buy Now</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object.isRequired,
};

export default PriceOption;
