import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <Outlet></Outlet>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
