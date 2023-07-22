import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import {createBrowserRouter , Outlet , RouterProvider , ScrollRestoration} from "react-router-dom"
import { productsData } from "./api/Api";
import Product from "./components/Product";
import Login from "./pages/Login";
import Shipping from './pages/Shipping'
import Payment from './pages/Payment'
import FinalOrderSummary from './pages/FinalOrderSummary'

const Layout =()=>{
 return(
  <div>
    <Header/>
    <Outlet/>
    <ScrollRestoration/>
    <Footer/>
  </div>
 )

}
const router =createBrowserRouter ([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader:productsData,

      },
	  {
		path:'/payment',
		element:<Payment />
	  },
	  {
		path:'/finalOrderSummary',
		element:<FinalOrderSummary />
	  },
	  {
		path:'/shipping',
		element:<Shipping />
	  },
      {
        path:"/product/:id",
        element: <Product/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path:"/",
      element:<Home/>
      }
      
    ],
  }
])

function App() {
  return (
    <div className="font-bodyFont">
    
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;