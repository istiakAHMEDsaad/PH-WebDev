import { useEffect, useState } from 'react';
import './index.css';
import Friend from './Friend';
export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setFriends(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='border-2 border-emerald-500 border-dashed p-5 rounded-md'>
      <h3 className='text-3xl text-rose-500 text-center'>
        Total Employee: {friends.length}
      </h3>

      {friends.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
}

/**
 * 1. state to hold data
 * 2. use effect with dependency array
 * 3. use fetch to load data
 * 4. set loaded data to the state
 */
