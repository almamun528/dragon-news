import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="bg-blue-500">Hello world!</div>,
  },
]);

export default router