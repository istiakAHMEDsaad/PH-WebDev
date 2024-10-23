import React from 'react';
import PropTypes from 'prop-types';
import { Bookmark } from './Bookmark';

const Bookmarks = ({ bookmarks, readingtime }) => {
  return (
    <div className='md:basis-[35%] border-2 rounded-lg bg-gray-200 p-4'>
      <div className='bg-white'>
        <h2>Spent time on read : {readingtime}</h2>
      </div>
      <div className=''>
        <h2>
          Bookmarked Blogs : <span>{bookmarks.length}</span>
        </h2>
        <div>
          {bookmarks.map((bookmark) => (
            <Bookmark key={bookmark.id} bookmark={bookmark} readingtime={readingtime}></Bookmark>
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
