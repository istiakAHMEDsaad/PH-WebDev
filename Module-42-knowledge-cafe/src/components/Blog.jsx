import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa6';
import { FaBookmark } from 'react-icons/fa6';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
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
    <div className='space-y-4'>
      <div className='w-auto h-auto'>
        <img
          className='rounded-lg w-full h-full'
          src={cover}
          alt={`pic ${id}`}
        />
      </div>

      {/* --> Author <-- */}
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row space-x-2 md:space-x-4 items-center'>
          <img
            className='md:w-14 md:h-14 w-10 h-10 object-cover'
            src={author_img}
            alt={`author image ${id}`}
          />
          <div>
            <p className='text-xl font-bold md:text-2xl  md:font-black'>{author}</p>
            <p className='text-base md:text-lg text-gray-500'>{posted_date}</p>
          </div>
        </div>

        {/* --> Bookmark icon <-- */}
        <div className='flex items-center space-x-2'>
          <p className='text-base md:text-xl text-gray-500'>{reading_time} min read</p>
          <button className='text-gray-500' onClick={() => handleAddToBookmark(blog)}>
            {press ? (
              <FaBookmark onClick={handlePress}></FaBookmark>
            ) : (
              <FaRegBookmark onClick={handlePress}></FaRegBookmark>
            )}
          </button>
        </div>

      </div>

      {/* --> Title <-- */}
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold md:w-3/4 lg:w-5/6'>{title}</h2>

      {/* --> Hash tag <-- */}
      <div className='flex space-x-2 text-base md:text-xl text-gray-500'>
        {hashtags[0] ? <p>#{hashtags[0]}</p> : ''}
        {hashtags[1] ? <p>#{hashtags[1]}</p> : ''}
        {hashtags[2] ? <p>#{hashtags[2]}</p> : ''}
      </div>

      {/* --> Mark as read button <-- */}
      <button onClick={() => handleMarkAsRead(reading_time, id)} className='underline text-purple-700 md:text-xl font-bold'>
        Marked as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
