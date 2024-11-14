import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import About from "../Components/About";
import Career from "../Components/Career";
import Category from "../Components/Category";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "category",
        element: <Category></Category>,
        loader: () =>etch(`https://openapi.programming-hero.com/api/news/category/`)},
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