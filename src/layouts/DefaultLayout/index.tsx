import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DefaultLayout = () => {
    return (
        <>
            <div className="grid grid-cols-12">
                <Sidebar className="col-start-1 col-end-3" />
                <main className="col-start-3 col-end-13">
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default DefaultLayout;
