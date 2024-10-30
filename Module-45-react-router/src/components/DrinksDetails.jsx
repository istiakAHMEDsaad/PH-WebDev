import { useLoaderData } from 'react-router-dom';

const DrinksDetails = () => {
  const details = useLoaderData();
  const detailsArr = details.drinks[0];
  // console.log(details.drinks[0].strDrink)

  const {
    strDrinkThumb,
    idDrink,
    strDrink,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    dateModified,
  } = detailsArr;
  return (
    <div className='p-8 border  rounded-md shadow-sm bg-gray-100'>
      <div className='w-60 h-60'>
        <img
          className='rounded-md'
          src={strDrinkThumb}
          alt={`image num ${idDrink}`}
        />
      </div>
      <h2 className='text-xl font-medium'>
        Name:{' '}
        <span className='font-normal italic text-gray-500'>{strDrink}</span>
      </h2>
      <p className='text-lg'>
        Category:{' '}
        <span className='font-normal italic text-gray-500'>{strCategory}</span>
      </p>
      <p className='text-lg'>
        Type:{' '}
        <span className='font-normal italic text-gray-500'>{strAlcoholic}</span>
      </p>
      <p className='text-lg'>
        Glass:{' '}
        <span className='font-normal italic text-gray-500'>{strGlass}</span>
      </p>
      <p className='text-lg'>
        Instruction:{' '}
        <span className='font-normal italic text-gray-500'>
          {strInstructions}
        </span>
      </p>
      <p className='text-lg'>
        Date:{' '}
        <span className='font-normal italic text-gray-500'>{dateModified}</span>
      </p>
    </div>
  );
};

export default DrinksDetails;
