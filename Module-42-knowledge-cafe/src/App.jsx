import './App.css';
import Bookmarks from './Bookmarks';
import Blogs from './components/Blogs';
import Header from './components/Header';

function App() {
  return (
    <>
      <div className='md:mx-32 mt-4'>
        <Header></Header>
        <div className='md:flex md:flex-row gap-x-5'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
