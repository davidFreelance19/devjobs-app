import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { JobsProvider } from "./context/JobsProvider";
import Layout from "./components/Layout";
import "./index.css";
import Index from "./pages/Index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/:id",
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <JobsProvider>
      <RouterProvider router={router}></RouterProvider>
    </JobsProvider>
  </React.StrictMode>
);
