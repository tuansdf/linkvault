import {
  Outlet,
  RouterProvider as RRouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import {
  AuthLayout,
  HomeLayout,
  HomePage,
  LoginPage,
  NotFoundPage,
  RegisterPage,
} from "~/pages";

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
    element: (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ),
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export const RouterProvider = () => {
  const isAuthed = false;
  const router = isAuthed ? authedRouter : notAuthedRouter;

  return <RRouterProvider router={router} />;
};
