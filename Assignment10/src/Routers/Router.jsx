import React from "react";
import { createBrowserRouter, NavLink } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Posts from "../Pages/Posts";
import Details from "../Pages/Details";

const Router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <h1>Home page</h1>,
        path: "/",
      },
      {
        element: <h1>Contact page</h1>,
        path: "/contact",
      },
      {
        element: <h1>About page</h1>,
        path: "/about",
      },
      {
        element: <h1>Info page</h1>,
        path: "/info",
      },
      {
        element: <Posts />,
        path: "/posts",
        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`),
      },
      {
        element: <Details />,
        path: "/posts/:postInfo",
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.postInfo}`
          ),
      },
    ],
  },
  {
    element: (
      <div>
        <h1>404 Your page is not found</h1>
        Go <NavLink to={"/"}>Home</NavLink>
      </div>
    ),

    path: "/*",
  },
]);
export default Router;
