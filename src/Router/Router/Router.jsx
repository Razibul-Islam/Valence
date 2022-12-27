import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Feed from "../../Pages/Home/Feed/Feed";
import Home from "../../Pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
