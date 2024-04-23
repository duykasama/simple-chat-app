import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const DefaultLayout = () => {
    return (
        <>
            <div className="flex flex-col justify-start h-screen">
                <div className="border-b">
                    <Header />
                </div>
                <div className="grid grid-cols-12 h-full">
                    <Sidebar className="col-start-1 col-end-4 border-r" />
                    <main className="col-start-4 col-end-13 h-full">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
};

export default DefaultLayout;
