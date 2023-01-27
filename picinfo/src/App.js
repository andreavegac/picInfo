import "./App.css";
import Home from "./pages/Home";
import ImageDetail from "./pages/ImageDetail";
import AboutUs from "./pages/AboutUs";
import Thanks from "./pages/Thanks";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/thanks",
    element: <Thanks />,
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
