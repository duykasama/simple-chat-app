import { createBrowserRouter } from "react-router-dom";
import Error from "@/pages/Error";
import DefaultLayout from "@/layouts/DefaultLayout";
import Home from "./Home/";
import PrivateRoute from "./PrivateRoute";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import AvoidManuallyNavigatedRoute from "./AvoidManuallyNavigatedRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <PrivateRoute />,
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
        ],
    },
    {
        element: <AvoidManuallyNavigatedRoute />,
        errorElement: <Error />,
        children: [
            {
                path: '/sign-in',
                element: <Login />,
                errorElement: <Error />,
            },
            {
                path: '/sign-up',
                element: <Register />,
                errorElement: <Error />,
            },
        ]
    },
]);

export default router;
