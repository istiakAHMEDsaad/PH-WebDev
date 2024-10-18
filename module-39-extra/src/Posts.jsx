import { useEffect, useState } from 'react';
import Post from './Post';

export default function Posts() {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <>
      <hr />
      <h3 className='text-2xl text-amber-500'>Module:</h3>
      <div>
        <ol className='list-decimal text-lg text-lime-500'>
          <li>Components</li>
          <li>JSX</li>
          <li>Props</li>
          <li>State</li>
          <li>Event handler</li>
          <li>Use effect data load</li>
        </ol>
      </div>

      <div className='border border-stone-500 rounded-lg w-3/4 mx-auto my-5 p-5'>
        <h1 className='text-3xl text-cyan-500 text-center underline'>
          Post Count: {post.length}
        </h1>
        {post.map((post) => (
          <Post post={post}></Post>
        ))}
      </div>
    </>
  );
}

/**
 * TODO1: Create a state to store the data
 * TODO2: Create use effect with no dependencies
 * TODO3: Use fetch to load data
 */
