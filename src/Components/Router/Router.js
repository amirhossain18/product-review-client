import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Review from "../Review/Review";

 export const router= createBrowserRouter([

    {
        path: '/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/review',
                element:<Review></Review>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
 ])