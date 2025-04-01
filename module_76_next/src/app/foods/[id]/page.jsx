import Image from 'next/image';
import Link from 'next/link';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
export const getSingleFood = async (food_id) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${food_id}`
  );
  const data = await res?.json();
  return data;
};

const SingleFood = async ({ params }) => {
  const foodId = await params;
  const singleFood = await getSingleFood(foodId?.id);
  const food = singleFood?.meals[0];
  return (
    <div className='lg:px-0 md:mx-5 container mx-auto'>
      <div className='my-4  flex items-center gap-2'>
        <Link href={'/foods'}><FaArrowAltCircleLeft className='hover:opacity-85 transition-all' size={25} /></Link>
        <h1 className='text-3xl'>Food Details</h1>
      </div>
      <section className='flex flex-col gap-2 items-center justify-center px-5 md:p-0'>
        <figure>
          <Image
            src={food?.strMealThumb}
            alt='food image'
            height={623}
            width={623}
            className='rounded-md md:w-96'
          ></Image>
        </figure>

        {/* text */}
        <div>
          <p className='text-2xl font-medium'>
            Name:{' '}
            <span className='font-normal text-gray-700'>{food?.strMeal}</span>
          </p>
          <p className='text-2xl font-medium'>
            Category:{' '}
            <span className='font-normal text-gray-700'>
              {food?.strCategory}
            </span>
          </p>
          <p className='text-2xl font-medium'>
            Food Type:{' '}
            <span className='font-normal text-gray-700'>{food?.strArea}</span>
          </p>
          <p className='text-2xl font-medium'>
            Tutorial:{' '}
            {/* <span className='font-normal text-gray-700'>{food?.strArea}</span> */}
            <a
              className='font-normal text-red-500 hover:text-blue-500 hover:underline transition-all'
              href={food?.strYoutube}
              target='_blank'
            >
              YouTube
            </a>
          </p>
          <p className='text-2xl font-medium'>
            Details:{' '}
            <span className='font-normal text-gray-700 w-3/4'>
              {food?.strInstructions}
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SingleFood;
{
  /* <p className='text-red-500'>{JSON.stringify(food)}</p> */
}
