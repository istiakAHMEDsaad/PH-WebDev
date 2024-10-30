import { useLoaderData } from 'react-router-dom';
import Drink from './Drink';

const Drinks = () => {
  const drinks = useLoaderData();
  const drinksArr = drinks.drinks;
  // console.log(drinks)
  return (
    <div>
      <h2>Total Post: {drinksArr.length}</h2>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4'>
        {drinksArr.map((drink) => (
          <Drink key={drinksArr.idDrink} drink={drink}></Drink>
        ))}
      </div>
    </div>
  );
};

export default Drinks;
