import { isAuthenticated } from "@/lib/services/authServices";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    return (
        isAuthenticated() ? (
            <Outlet />
        ) : (
            <Navigate to="/sign-in" />
        )
    );
};

export default PrivateRoute;
