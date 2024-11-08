import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footers from '../Components/Footers';

const MainLayout = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <div className='min-h-[calc(100vh-288px)]'>
        <Outlet></Outlet>
      </div>
      {/* 68+220=288 */}
      <Footers></Footers>
    </div>
  );
};

export default MainLayout;
