import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
    const { accessToken } = useSelector((store) => store.users);

    return <>{accessToken ? <Component /> : <Navigate to="/login" />}</>
};

export default PrivateRoute;