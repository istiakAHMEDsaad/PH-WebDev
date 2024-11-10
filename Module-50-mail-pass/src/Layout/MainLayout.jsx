import { Outlet } from 'react-router-dom';
import Footers from '../Components/Footers';
import Header from '../Components/Header';

const MainLayout = () => {
  return (
    <div className='lg:max-w-7xl md:max-w-3xl max-w-sm mx-auto'>
      <Header></Header>
      <div className='min-h-[calc(100vh-288px)]'>
        <Outlet></Outlet>
      </div>
      <Footers></Footers>
    </div>
  );
};

export default MainLayout;
