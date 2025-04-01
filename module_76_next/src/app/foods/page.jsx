'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

/* export const metadata = {
  title: 'Foods | Next Meal',
  description: 'See your favourite foods recipe',
}; */

const FoodPage = () => {
  const [food, setFood] = useState([]);
  const [search, setSearch] = useState('');

  const fetchFood = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      setFood(data?.meals || []);
      return data.meals;
    } catch (error) {
      alert('Something is wrong!');
      return [];
    }
  };

  useEffect(() => {
    fetchFood();
  }, [search]);

  // const apiData = await getFood();
  // const food = apiData.meals;

  return (
    <div className='container mx-auto'>
      <div className='my-4'>
        <h1 className='text-3xl'>All Food Items</h1>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='border p-1 rounded-md'
          type='text'
          placeholder='search food'
        />
      </div>
      <section className='flex items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {food.map((item) => (
            <div
              key={item?.idMeal}
              className='border border-gray-400 p-2 lg:p-4 rounded-xl shadow-md flex flex-col gap-3'
            >
              <figure>
                <Image
                  src={item?.strMealThumb}
                  alt={item?.idMeal}
                  width={623}
                  height={623}
                  style={{
                    borderRadius: '1rem',
                  }}
                />
              </figure>

              <div className='flex flex-col gap-2'>
                <p className='text-2xl font-semibold text-gray-700'>
                  {item?.strMeal}
                </p>

                <div>
                  <Link
                    href={`foods/${item?.idMeal}`}
                    className='py-2 px-3 rounded-md bg-blue-500 inline-block hover:bg-blue-600 transition-colors'
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FoodPage;
