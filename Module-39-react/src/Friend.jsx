export default function Friend({ friend }) {
  // console.log(friend);
  const { name, email, username, phone } = friend;
  const { city } = friend.address;
  return (
    <div className='border border-gray-500 rounded-md p-5 mb-4'>
      <div className=''>
        <h3 className='text-xl'>
          Name: <span className='text-yellow-500'>{name}</span>
        </h3>
        <p className="text-lg">Username: <span className="text-teal-500">{username}</span></p>
        <p className='text-lg'>
          Email: <span className='text-green-500'>{email}</span>
        </p>
        <p className='text-lg'>
          city: <span className="text-sky-500">{city}</span>
        </p>
        <p className="text-lg">Phone: <span className="text-orange-500">{phone}</span></p>
      </div>
    </div>
  );
}
