import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='md:basis-9/12'>
      <p>Blogs: {blogs.length}</p>
      {blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)}
    </div>
  );
};

export default Blogs;
