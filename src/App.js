import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import PostModal from "./Pages/Home/Feed/Post/PostModal";
import LogIn from "./Pages/Shared/LeftNavInner/LogIn/LogIn";
import { router } from "./Router/Router/Router";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <LogIn />
      <PostModal />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
