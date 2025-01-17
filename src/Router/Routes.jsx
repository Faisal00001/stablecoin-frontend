import {
    createBrowserRouter,
} from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Overview from "../Dashboard/Overview/Overview";
import Notifications from "../Dashboard/Notifications/Notifications";
import Market from "../Dashboard/Market/Market";
import MyWallet from "../Dashboard/MyWallet/MyWallet";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ],

    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'overview',
                element: <Overview></Overview>
            },
            {
                path: 'notifications',
                element: <Notifications></Notifications>
            },
            {
                path: 'market',
                element: <Market></Market>
            },
            {
                path: 'myWallet',
                element: <MyWallet></MyWallet>
            }
        ]
    }
]);
export default router