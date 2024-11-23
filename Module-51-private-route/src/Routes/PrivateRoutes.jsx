import { useContext } from "react";
import { AuthContext } from "./RouteProvider";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-ring loading-md"></span>;
    }

    if(user){
        return children;
    }
    return (
        // <Link to='/login'></Link>
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoutes;