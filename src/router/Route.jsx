import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home/Home/Home"
import Main from "../layout/Main"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import AddToyPage from "../pages/AddToyPage/AddToyPage"
import MyToys from "../pages/MyToys/MyToys"
import AllToyPage from "../pages/AllToyPage/AllToyPage"
import ToyTabDetails from "../pages/Home/ToyTabCategory/ToyTabDetails"
import PrivateRoute from "./PrivateRoute"
import SingleToy from "../pages/AllToyPage/SingleToy"
import MySingleToy from "../pages/MyToys/MySingleToy"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/addToy',
                element: <AddToyPage />
            },
            {
                path: '/myToys',
                element: <MyToys />
            },
            {
                path: '/allToys',
                element: <AllToyPage />
            },
            {
                path: '/toyTabDetails',
                element: <PrivateRoute><ToyTabDetails /></PrivateRoute>
            },
            {
                path: '/allToySingleInfo/:id',
                element: <PrivateRoute><SingleToy /></PrivateRoute>
            },
            {
                path: '/mySingleToy/:id',
                element: <MySingleToy />
            }

        ]
    },
])
export default router