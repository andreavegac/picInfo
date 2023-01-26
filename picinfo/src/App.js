import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import ImageDetail from './pages/ImageDetail';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:id",
    element: <ImageDetail />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);


function App() {
  return (

      <div className="App">
        <RouterProvider router={router} />
      </div>
   
  );
}

export default App;
