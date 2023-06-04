import {
  Outlet,
  RouterProvider as RRouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { HomeLayout, HomePage } from "~/pages";

const authedRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomeLayout>
        <Outlet />
      </HomeLayout>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

const notAuthedRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

const RouterProvider = () => {
  const isAuthed = true;
  const router = isAuthed ? authedRouter : notAuthedRouter;

  return <RRouterProvider router={router} />;
};

export default RouterProvider;
