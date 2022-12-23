import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Addproducts from "../AddProducts/Addproducts";
import AllProducts from "../AllProducts/AllProducts";
import Checkout from "../Checkout/Checkout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Regestration from "../Login/Regestration";
import Main from "../Main/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
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
                element:<PrivateRoute><Review></Review></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/rigester',
                element:<Regestration></Regestration>
            },
            {
                path:'/products/add', 
                element:<Addproducts></Addproducts>
            },
            {
                path:'/products/',
                element:<AllProducts></AllProducts>
            },
            {
                path:'/products/checkout/:id',
                element:<Checkout></Checkout>,
                loader:  ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
            }
        ]
    }
 ])