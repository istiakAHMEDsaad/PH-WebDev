import { useState } from 'react';
import './App.css';
import Bookmarks from './Bookmarks';
import Blogs from './components/Blogs';
import Header from './components/Header';

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  };
  return (
    <>
      <div className='md:mx-32 mt-4'>
        <Header></Header>
        <div className='md:flex md:flex-row gap-x-5'>
          <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
