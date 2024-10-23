import { useState } from 'react';
import './App.css';
import Bookmarks from './Bookmarks';
import Blogs from './components/Blogs';
import Header from './components/Header';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingtime, setReadingtime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    // console.log(newBookmarks);
  };

  const handleMarkAsRead = (time, id) => {
    setReadingtime(readingtime + time);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  };
  return (
    <>
      <div className='mx-5 md:mx-32 mt-4'>
        <Header></Header>
        <div className='md:flex md:flex-row gap-x-5'>
          <Blogs
            handleAddToBookmark={handleAddToBookmark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
          <Bookmarks
            bookmarks={bookmarks}
            readingtime={readingtime}
          ></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
