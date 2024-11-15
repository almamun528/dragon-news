import { useContext } from "react";
import { AuthContext } from "../ContextApi/AuthProvider";
import { Navigate, useLoaderData } from "react-router-dom";
import Loading from "../Components/Loading";

const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    const location = useLoaderData()

    if(loading){
        return<Loading></Loading>
    }
    if(user && user?.email){
        return children
    }
    return (
      <>
        <Navigate state={location.pathname} to="/auth/login"></Navigate>
      </>
    );
};

export default PrivateRoute;