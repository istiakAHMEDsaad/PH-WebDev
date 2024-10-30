import { Outlet } from "react-router-dom";


const Test = () => {
    return (
        <div>
            <h2 className="text-4xl">This is testing route ⚡</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Test;