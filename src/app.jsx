import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/cart";
import Order, { loader as orderLoader } from "./features/order/Order";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import { action as updateOrderAction } from "./features/order/UpdateOrder";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "order/:orderId",
        loader: orderLoader,
        element: <Order />,
        errorElement: <Error />,
        action: updateOrderAction,
      },
      {
        path: "order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
