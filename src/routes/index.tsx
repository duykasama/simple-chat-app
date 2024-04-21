import { createBrowserRouter } from "react-router-dom";
import Error from "@/pages/Error";
import DefaultLayout from "@/layouts/DefaultLayout";
import Home from "./Home/";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <h1>About</h1>,
            },
        ],
    },
]);

export default router;
