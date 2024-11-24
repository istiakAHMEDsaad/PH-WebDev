import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <h2>User Management System</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;