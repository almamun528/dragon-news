import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import About from "../Components/About";
import Career from "../Components/Career";
import CategoryNews from "../Components/CategoryNews";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path:''
        , element: <Navigate to={`/category/01`}></Navigate>
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({params}) =>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)},
    ],
  },
  {
    path: "about",
    element: <About></About>,
  },
  {
    path: "career",
    element: <Career></Career>,
  },
]);

export default router