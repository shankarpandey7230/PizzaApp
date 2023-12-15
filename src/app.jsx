import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import Menu from './features/menu/Menu';
import Cart from './features/cart/cart';
import Order from './features/order/Order';
import CreateOrder from './features/order/CreateOrder';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  { path: '/cart', element: <Cart /> },
  { path: 'order/:orderId', element: <Order /> },
  { path: 'order/new', element: <CreateOrder /> },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
