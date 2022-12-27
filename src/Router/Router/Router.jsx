import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Feed from "../../Pages/Home/Feed/Feed";
import Home from "../../Pages/Home/Home/Home";
import Error from "../../Pages/Shared/Error/Error";
import BookMarks from "../../Pages/Shared/LeftNavInner/BookMarks/BookMarks";
import Explore from "../../Pages/Shared/LeftNavInner/Explore/Explore";
import Message from "../../Pages/Shared/LeftNavInner/Message/Message";
import Notification from "../../Pages/Shared/LeftNavInner/Notification/Notification";
import Profile from "../../Pages/Shared/LeftNavInner/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "media",
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "message",
        element: <Message />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "bookmarks",
        element: <BookMarks />,
      },
    ],
  },
]);
