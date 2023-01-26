import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import ImageDetail from './pages/ImageDetail';
import AboutUs from './pages/AboutUs';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/detail/:id",
    element: <ImageDetail />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
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
