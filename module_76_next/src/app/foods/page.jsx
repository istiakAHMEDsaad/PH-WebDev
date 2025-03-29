import Image from 'next/image';
import Link from 'next/link';
export const getFood = async () => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  const data = await res.json();
  return data;
};

const FoodPage = async () => {
  const apiData = await getFood();
  const food = apiData.meals;
  //   console.log(food.meals);

  return (
    <div className='container mx-auto'>
      <h1 className='my-4'>All Food Items</h1>
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
                  width={280}
                  height={280}
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
