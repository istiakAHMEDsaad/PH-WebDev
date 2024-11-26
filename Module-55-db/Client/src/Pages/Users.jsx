// @ts-nocheck
import { useContext } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { ContextAPI } from '../Provider/ContexProvider';

const Users = () => {
  const { dbData, handleDelteUser } = useContext(ContextAPI);
  //   console.log(dbData)
  return (
    <div className='space-y-5'>
      {dbData.map((singleData, index) => (
        <div
          key={singleData._id}
          className='card bg-base-100 w-96 shadow-xl relative'>
          {/* Card */}
          <div className='card-body'>
            <h2 className='card-title'>Users Number: {index + 1}</h2>
            <p>Email: {singleData.email}</p>
            <div className='card-actions justify-end'>
              <p>Password: {singleData.password}</p>
            </div>
          </div>

          <button onClick={()=>handleDelteUser(singleData._id)} className='absolute text-red-600 text-2xl right-1 top-2 btn btn-xs btn-ghost'>
            <RxCross2></RxCross2>
          </button>
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
