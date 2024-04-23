import { createBrowserRouter } from "react-router-dom";
import Error from "@/pages/Error";
import DefaultLayout from "@/layouts/DefaultLayout";
import Home from "./Home/";
import PrivateRoute from "./PrivateRoute";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import AvoidManuallyNavigatedRoute from "./AvoidManuallyNavigatedRoute";
import Chat from "./Chat";
import { AddFriend, FriendRequests, FriendsList } from "./Friends";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        errorElement: <Error />,
        children: [
            {
                element: <PrivateRoute />,
                children: [
                    {
                        path: '/',
                        element: <Home />,
                    },
                    {
                        path: '/chat/:id',
                        element: <Chat />,
                    },
                    {
                        path: '/friends',
                        element: <FriendsList />,
                    },
                    {
                        path: '/friends/new',
                        element: <AddFriend />,
                    },
                    {
                        path: '/friends/requests',
                        element: <FriendRequests />,
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
