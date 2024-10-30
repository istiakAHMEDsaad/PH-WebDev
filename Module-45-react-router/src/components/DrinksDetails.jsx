import { useLoaderData, useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
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

      <button
        onClick={handleGoBack}
        className='border px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-500 transition-all'
      >
        Go back
      </button>
    </div>
  );
};

export default DrinksDetails;
