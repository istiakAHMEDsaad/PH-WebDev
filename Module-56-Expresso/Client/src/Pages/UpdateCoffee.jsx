import { useLoaderData } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UpdateCoffee = () => {
  const singleCoffeeUpdate = useLoaderData();

  const { name } = singleCoffeeUpdate || {};

  return (
    <div>
        {/* Back Button */}
      <Link to={'/'}>
        <button className='font-rancho text-2xl flex items-center gap-1 hover:scale-105 transition-all active:scale-95'>
          <FaLongArrowAltLeft></FaLongArrowAltLeft>Back to home
        </button>
      </Link>

      <div className='bg-stone-100 mt-8 space-y-5'>
        <h2 className='font-rancho text-3xl text-center'>Update Existing Coffee Details</h2>
        <p className='text-center md:w-3/5 mx-auto'>
        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
        </p>

        {/* --> Form <-- */}
        <form className='card-body'>
          {/* form container */}
          <div className='flex flex-col md:flex-row items-center justify-between'>
            {/* Left side */}
            <div className='basis-[48%]'>
              {/* 1 */}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text font-bold'>Name</span>
                </label>
                <input
                  type='text'
                  name='name'
                  placeholder='Enter coffee name'
                  className='input input-bordered'
                />
              </div>
              {/* 2 */}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text font-bold'>Price</span>
                </label>
                <input
                  type='text'
                  name='price'
                  placeholder='Enter coffee price'
                  className='input input-bordered'
                />
              </div>
              {/* 3 */}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text font-bold'>Category</span>
                </label>
                <input
                  type='text'
                  name='category'
                  placeholder='Enter coffee category'
                  className='input input-bordered'
                />
              </div>
            </div>

            {/* Right side */}
            <div className='basis-[48%]'>
              {/* 4 */}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text font-bold'>Chef</span>
                </label>
                <input
                  type='text'
                  name='chef'
                  placeholder='Enter coffee chef'
                  className='input input-bordered'
                />
              </div>
              {/* 5 */}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text font-bold'>Taste</span>
                </label>
                <input
                  type='text'
                  name='taste'
                  placeholder='Enter coffee taste'
                  className='input input-bordered'
                />
              </div>
              {/* 6 */}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text font-bold'>Details</span>
                </label>
                <input
                  type='text'
                  name='details'
                  placeholder='Enter coffee details'
                  className='input input-bordered'
                />
              </div>
            </div>
          </div>

          {/* Photo URL */}
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-bold'>Photo</span>
            </label>
            <input
              type='url'
              name='photo'
              placeholder='Enter photo URL'
              className='input input-bordered'
            />
          </div>

          {/* Add new coffee button */}
          <div className='form-control mt-6'>
            <input
              type='submit'
              value='Update Coffee Details'
              className='border border-brown rounded-md py-2 font-rancho text-xl text-brown bg-[#D2B48C] hover:bg-brown hover:text-white active:scale-95 transition-all cursor-pointer'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
