import React from 'react';
import PropTypes from 'prop-types';

export const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-white p-4 rounded-md'>
            <h2 className='text-xl font-semibold'>{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
  };

export default Bookmark;