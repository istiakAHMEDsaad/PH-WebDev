import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className='grid lg:grid-cols-12'>
        {/* sidenavbar */}
        <div className='lg:col-span-3'>
            <ul className='flex flex-col'><li>user list</li>
            <li>product list</li></ul>
        </div>

        {/* dashboard content */}
        <div className='lg:col-span-9'>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
