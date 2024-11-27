// @ts-nocheck


import { Link, useLoaderData } from 'react-router-dom';

const UpdateUsers = () => {
  const loadedUser = useLoaderData();
  //? ------------------------ Update User ------------------------
  const handleUpdateUser = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const name = form.get('name');
    const email = form.get('email');
    const updatedUser = {name, email}
    console.log(updatedUser);

    fetch(`http://localhost:3000/users/${loadedUser?._id}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(updatedUser)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className='space-y-2 mb-5'>
      {/* Button Div */}
      <div className='flex items-center gap-4'>
        <Link to={'/'}>
          <button className='btn btn-sm btn-info'>Add User</button>
        </Link>
        <Link to={'/users'}>
          <button className='btn btn-sm btn-success'>Show Users</button>
        </Link>
      </div>

      <h2 className='text-2xl font-semibold'>
        Update the information of{' '}
        <span className='text-rose-500'>{loadedUser.name}</span>
      </h2>

      <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
        <form onSubmit={handleUpdateUser} className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              placeholder='Name'
              name='name'
              className='input input-bordered'
              defaultValue={loadedUser?.name}
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              placeholder='Email'
              name='email'
              className='input input-bordered'
              defaultValue={loadedUser?.email}
              required
            />
          </div>
          <div className='form-control mt-6'>
            <button className='btn btn-info'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUsers;
