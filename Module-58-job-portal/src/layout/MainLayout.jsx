// @ts-nocheck
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footers from '../components/Footers';

const MainLayout = () => {
  return (
    <div className='lg:max-w-7xl md:max-w-screen-md max-w-screen-sm mx-auto'>
      <Header />
      {/* header: 68, footer 220px */}
      <div className='min-h-[calc(100vh-288px)]'>
        <Outlet />
      </div>
      <Footers />
    </div>
  );
};

export default MainLayout;
