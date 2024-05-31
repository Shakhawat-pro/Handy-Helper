import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/home/Home";
import Services from "../Pages/Services/Services";
import Login from "../Pages/Login/Login";
import AllCategory from "../Pages/Home/home/Category/AllCategory";
import ServiceDetails from "../Pages/Home/home/PopularServices/ServiceDetails";
import AddService from "../Pages/Home/home/PopularServices/AddService";
import PrivateRoute from "./PrivateRoute";
import ManageServices from "../Pages/Services/ManageServices";
import UpdateService from "../Pages/Services/UpdateService";
import CheckOut from "../CheckOut/CheckOut";
import Bookings from "../Bookings/Bookings";
import ServicesToDO from "../Pages/Services/ServicesToDO";
import Error from "../Pages/Error/Error";
import EditProfile from "../Pages/Profile/EditProfile";

 
const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <Main></Main>,
    errorElement: <Error></Error> ,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/services',
            element: <Services></Services>,
            loader: () => fetch('https://handy-helper-server.vercel.app/services')
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/category/:id',
            element: <AllCategory></AllCategory>,
            loader: ({params}) => fetch(`https://handy-helper-server.vercel.app/category/${params.id}`)
        },
        {
            path: '/services/:id',
            element: <ServiceDetails></ServiceDetails>,
            loader: ({params}) => fetch(`https://handy-helper-server.vercel.app/services/${params.id}`)
        },
        {
            path: '/addService',
            element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
            path: '/manageServices',
            element: <PrivateRoute><ManageServices></ManageServices></PrivateRoute>,
            loader: () => fetch('https://handy-helper-server.vercel.app/services')
        },
        {
            path: '/updateService/:id',
            element: <PrivateRoute><UpdateService></UpdateService></PrivateRoute>,
            loader: ({params}) => fetch(`https://handy-helper-server.vercel.app/services/${params.id}`)
        },
        {
            path: '/checkOut/:id',
            element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader: ({params}) => fetch(`https://handy-helper-server.vercel.app/services/${params.id}`)
        },
        {
            path: '/bookings',
            element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        },
        {
            path: '/servicesToDo',
            element: <PrivateRoute><ServicesToDO></ServicesToDO></PrivateRoute>
        },
        {
            path: 'editProfile',
            element: <PrivateRoute><EditProfile></EditProfile></PrivateRoute>
        }
        
        
    ]
    }, 
   ]);

export default router