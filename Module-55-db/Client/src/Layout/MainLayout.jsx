import { Outlet } from 'react-router-dom';
import Headers from '../Components/Headers';
import Footers from '../Components/Footers';

const MainLayout = () => {
  return (
    <div className='lg:max-w-7xl md:max-w-screen-md max-w-sm mx-auto'>
      <Headers></Headers>
      <div className='min-h-[calc(100vh-288px)]'>
        <Outlet></Outlet>
      </div>
      <Footers></Footers>
    </div>
  );
};

export default MainLayout;
