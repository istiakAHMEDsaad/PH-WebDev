import Link from 'next/link';

export const metadata = {
  title: 'Shop | Next Meal',
  description: 'Shop your favourite cloth',
};

const Shop = () => {
  const shopData = [
    {
      _id: '00a1',
      product_name: "Stylish Men's Pant",
      product_img: '/1_brown_pant.webp',
      product_des: 'Credibly maximize open-source convergence through.',
    },
    {
      _id: '00a2',
      product_name: "Stylish Men's Shirt",
      product_img: '/2_black_shirt.webp',
      product_des: 'Competently target client-based core competencies.',
    },
  ];
  return (
    <div className='mx-auto container'>
      <h2 className='text-2xl mt-3 mb-10'>Choose products for:</h2>
      <figure className='flex flex-col md:flex-row gap-4 items-center'>
        {shopData.map((item) => (
          <Link
            href={`/shop/${item?._id}`}
            className='border w-70 border-gray-200 rounded-md shadow-md p-2 flex flex-col gap-2 
            lg:hover:scale-105 transition-transform'
            key={item?._id}
          >
            <img
              className='rounded-md w-64'
              src={item.product_img}
              alt={item?.product_name}
            />

            <p className='font-bold'>
              Name: <span className='font-normal'>{item?.product_name}</span>
            </p>

            {/* <p className='font-bold'>
              Description:{' '}
              <span className='font-normal'>{item?.product_des}</span>
            </p> */}
          </Link>
        ))}
      </figure>
    </div>
  );
};
export default Shop;
// https://img.drz.lazcdn.com/static/bd/p/9897f41e934470bdeeb6b834d74094a3.jpg_720x720q80.jpg_.webp
// https://img.drz.lazcdn.com/static/bd/p/b484a6a569fbaf4eee50becdac975a71.png_720x720q80.png_.webp
