import { Navigate, createBrowserRouter } from "react-router-dom";
import { Login } from "../main/public/login";
import { Register } from "../main/public/register";

export const publicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: '/*',
    index:true,
    element: <Navigate to="/" />
  }
]);