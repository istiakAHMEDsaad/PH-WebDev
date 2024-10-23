import React from 'react';
import PropTypes from 'prop-types';
import { Bookmark } from './Bookmark';

const Bookmarks = ({ bookmarks, readingtime }) => {
  return (
    <div className='md:basis-[35%] border-2 rounded-md bg-gray-200 lg:p-3 p-2'>
      <div className='bg-indigo-100 py-3 rounded-md border-2 border-indigo-600 text-indigo-600'>
        <h2 className='text-center text-2xl font-bold tracking-wide'>
          Spent time on read : {readingtime}
        </h2>
      </div>
      <div className='mt-5'>
        <h2 className='text-2xl font-bold mb-3'>
          Bookmarked Blogs : <span>{bookmarks.length}</span>
        </h2>
        <div className='flex flex-col space-y-4'>
          {bookmarks.map((bookmark, idx) => (
            <Bookmark
              key={idx}
              bookmark={bookmark}
              readingtime={readingtime}
            ></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingtime: PropTypes.number.isRequired,
};

export default Bookmarks;
