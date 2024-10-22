import React from 'react';
import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
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
          <i className='ri-bookmark-line'></i>
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
      <a href="#" className='underline'>Marked as read</a>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
