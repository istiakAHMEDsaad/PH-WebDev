// @ts-nocheck
import { useContext } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { ContextAPI } from '../Provider/ContexProvider';
import { Link } from 'react-router-dom';

const Users = () => {
  const { dbData, handleDelteUser } = useContext(ContextAPI);
  //   console.log(dbData)
  return (
    <div className='space-y-5'>
      <Link to={'/'}>
        <button className='btn btn-sm btn-accent'>Add User</button>
      </Link>
      {dbData.map((singleData, index) => (
        <div
          key={singleData._id}
          className='card bg-base-100 w-96 shadow-xl relative'
        >
          {/* Card */}
          <div className='card-body'>
            <h2 className='card-title'>Users Number: {index + 1}</h2>
            <p>Name: {singleData.name}</p>
            <div className='card-actions justify-end'>
              <p>Email: {singleData.email}</p>
            </div>
          </div>

          <button
            onClick={() => handleDelteUser(singleData._id)}
            className='absolute text-red-600 text-2xl right-1 top-2 btn btn-xs btn-ghost'
          >
            <RxCross2></RxCross2>
          </button>
          <Link to={`/users/${singleData._id}`}>
            <button className='w-24 py-2 rounded-md bg-blue-600 hover:bg-blue-500 transition-all active:scale-95 text-white font-semibold mx-7 mb-4'>
              Update
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Users;

/*
<div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
*/
