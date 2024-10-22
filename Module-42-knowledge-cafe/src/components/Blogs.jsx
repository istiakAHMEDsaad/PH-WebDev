// @ts-nocheck
import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import PropTypes from 'prop-types';

const Blogs = ({ handleAddToBookmark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='md:basis-[65%]'>
      <p>Blogs: {blogs.length}</p>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} handleAddToBookmark={handleAddToBookmark}></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func.isRequired,
};

export default Blogs;
