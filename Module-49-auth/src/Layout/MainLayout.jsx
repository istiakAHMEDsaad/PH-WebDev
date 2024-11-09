import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footers from '../Components/Footers';

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='min-h-[calc(100vh-288px)]'> {/* nav-68px footer-220px */}
        <Outlet></Outlet>
      </div>
      <Footers></Footers>
    </div>
  );
};

export default MainLayout;
