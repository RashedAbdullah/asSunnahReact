import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import SignIn from './../components/auth/SignIn';
import SignUp from './../components/auth/SignUp';
import Home from "../pages/home/Home";

export const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <Home/>,
        path: "/",
      },
      {
        element: <h2>Booking page...</h2>,
        path: "/booking",
      },
      {
        element: <h2>Blogs...</h2>,
        path: "/blogs"
      },
      {
        element: <h2>Users...</h2>,
        path: "/users"
      },
      {
        element: <h2>Contact...</h2>,
        path: "/contact"
      },
      {
        element: <h2>About...</h2>,
        path: "/about"
      },
      {
        element: <h2>User profile...</h2>,
        path: "/user_profile"
      },
    ],
  },
  {
    element: <SignIn/>,
    path: "/signin"
  },
  {
    element: <SignUp/>,
    path: "/signup"
  }
]);
