import Link from 'next/link';

const MaleProducts = ({ params }) => {
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
  const paramId = params?.id;
  const singleData = shopData.find((item) => item?._id === paramId);
  const { product_img, product_name, product_des } = singleData;
  return (
    <div className='mx-auto container space-y-2'>
      <h2 className='font-semibold text-3xl text-center my-4'>
        Products Details
      </h2>
      <Link
        href={'/shop'}
        className='inline-block py-1 px-4 rounded-md bg-rose-300 hover:bg-rose-400 transition-colors'
      >
        Back
      </Link>
      <div className='flex flex-col gap-1'>
        <img
          className='lg:w-96 rounded-md shadow-md'
          src={product_img}
          alt={product_name}
        />
        <p className='text-xl'>{product_name}</p>
        <p className='text-xl'>{product_des}</p>
      </div>
    </div>
  );
};

export default MaleProducts;
