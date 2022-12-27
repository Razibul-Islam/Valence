import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Feed from "../../Pages/Home/Feed/Feed";
import Home from "../../Pages/Home/Home/Home";
import Error from "../../Pages/Shared/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
