import { createBrowserRouter } from "react-router-dom";
import { RouterProvider as RRouterProvider } from "react-router-dom";
import HomePage from "~/pages/home-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

const RouterProvider = () => {
  return <RRouterProvider router={router} />;
};

export default RouterProvider;
