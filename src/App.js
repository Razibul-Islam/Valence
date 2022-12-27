import { RouterProvider } from 'react-router-dom';
import './App.css';
import LogIn from './Pages/Shared/LeftNavInner/LogIn/LogIn';
import { router } from './Router/Router/Router';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <LogIn/>
    </div>
  );
}

export default App;
