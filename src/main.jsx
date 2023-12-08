import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Products from './components/Products/Products.jsx';
import ReviewProduct from './components/ReviewProduct/ReviewProduct.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import ContextProvaider from './ContextProvaider/ContextProvaider.jsx';
import PrivateRouter from './components/PrivateRounter/PrivateRouter.jsx';
import ProductDetails from './components/ProductsDetails/ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    loader: () =>
      fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish'),
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'products',
        element: (
          <PrivateRouter>
            <Products />
          </PrivateRouter>
        ),
        loader: () =>
          fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish'),
      },
      {
        path: 'products/:id',
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
          ),
      },
      {
        path: 'review-product',
        element: (
          <PrivateRouter>
            <ReviewProduct></ReviewProduct>
          </PrivateRouter>
        ),
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvaider>
      <RouterProvider router={router}></RouterProvider>
    </ContextProvaider>
  </React.StrictMode>
);
