import './App.css';
import Bookmarks from './Bookmarks';
import Blogs from './components/Blogs';
import Header from './components/Header';

function App() {
  return (
    <>
      <div className='md:container mx-auto mt-4'>
        <Header></Header>
        <div className='md:flex md:flex-row items-center justify-between'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
