import { useContext } from "react";
import PropTypes from 'prop-types';

import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location);
    if(loading){
        return <div className="text-center mt-5"><span className="loading text-[#FF3811] loading-infinity w-32"></span></div>
    }
    
    if(user){
        return children
    }

    return <Navigate to="/login" state={location.pathname} replace></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}