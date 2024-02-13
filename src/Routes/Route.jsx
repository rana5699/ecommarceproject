import {createBrowserRouter} from "react-router-dom";
import Home from "../HomePages/Home/Home";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
