import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import SignUp from "./components/Sign up/SignUp";
import SignIn from "./components/Sign in/SignIn";
import Productlist from "./components/ProductList/Productlist";


export const myRouter = createBrowserRouter([
    {
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/signup",
            element: <SignUp />
        },
        {
            path: "/signin",
            element: <SignIn/>
        },
        {
            path: "/category/:categoryName",
            element: <Productlist/>
        },
    
    ]
    }
])