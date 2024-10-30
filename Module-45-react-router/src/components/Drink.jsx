import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Drink = ({ drink }) => {
  const { strDrink, strDrinkThumb, idDrink } = drink;
  return (
    <div className='border-2 rounded-md shadow-md flex flex-col justify-between p-4  hover:-translate-y-1 transition-all hover:shadow-lg hover:outline hover:outline-offset-1 hover:outline-1 cursor-pointer'>
      <div>
        <img
          className='rounded-lg'
          src={strDrinkThumb}
          alt={`image ${idDrink}`}
        />
      </div>
      <h2 className='text-stone-700 text-xl font-medium'>
        Name: <span className='italic text-lg font-normal'>{strDrink}</span>
      </h2>
      <Link to={`/drinks/${idDrink}`}>
        <button className='border px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-500 transition-all'>
          More info
        </button>
      </Link>
    </div>
  );
};

Drink.propTypes = {
  drink: PropTypes.object.isRequired,
};

export default Drink;
