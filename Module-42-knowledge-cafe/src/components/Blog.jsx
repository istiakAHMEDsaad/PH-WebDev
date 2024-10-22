import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa6';
import { FaBookmark } from 'react-icons/fa6';

const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    id,
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  const [press, setPress] = useState(false);
  const handlePress = () => {
    setPress(!press);
  };

  return (
    <div>
      <div className=''>
        <img
          className='rounded-lg w-full h-full'
          src={cover}
          alt={`pic ${id}`}
        />
      </div>

      {/* --> Author <-- */}
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row'>
          <img
            className='w-10 h-10 object-cover'
            src={author_img}
            alt={`author image ${id}`}
          />
          <div>
            <p>{author}</p>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className='flex items-center'>
          <p>{reading_time} min read</p>
          <button onClick={() => handleAddToBookmark(blog)}>
            {press ? (
              <FaBookmark onClick={handlePress}></FaBookmark>
            ) : (
              <FaRegBookmark onClick={handlePress}></FaRegBookmark>
            )}
          </button>
        </div>
      </div>

      {/* --> Title <-- */}
      <h2 className='text-2xl w-3/4'>{title}</h2>

      {/* --> Hash tag <-- */}
      <div className='flex'>
        {hashtags[0] ? <p>#{hashtags[0]}</p> : ''}
        {hashtags[1] ? <p>#{hashtags[1]}</p> : ''}
        {hashtags[2] ? <p>#{hashtags[2]}</p> : ''}
      </div>
      <a href='#' className='underline'>
        Marked as read
      </a>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
};

export default Blog;
