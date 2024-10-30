import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Drink = ({ drink }) => {
  const { strDrink, strDrinkThumb, idDrink } = drink;

  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/drinks/${idDrink}`);
  };

  return (
    <>
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

      <div className='flex gap-x-2'>
        <Link to={`/drinks/${idDrink}`}>
          <button className='border px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-500 transition-all'>
            More info
          </button>
        </Link>
        <button onClick={handleShowDetails}>ℹ</button>
      </div>
    </div>

    </>
  );
};

Drink.propTypes = {
  drink: PropTypes.object.isRequired,
};

export default Drink;
