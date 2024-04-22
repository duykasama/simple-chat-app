import { isAuthenticated } from "@/lib/services/authServices";
import { Navigate, Outlet } from "react-router-dom";

const AvoidManuallyNavigatedRoute = () => {
    return (
        isAuthenticated()
            ? <Navigate to="/" />
            : <Outlet />
    );
};

export default AvoidManuallyNavigatedRoute;
