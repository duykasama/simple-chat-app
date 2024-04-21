import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DefaultLayout = () => {
    return (
        <>
            <div className="grid grid-cols-12 h-screen">
                <Sidebar className="col-start-1 col-end-4" />
                <main className="col-start-4 col-end-13 bg-blue-300">
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default DefaultLayout;
