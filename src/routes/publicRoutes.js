import { createBrowserRouter } from "react-router-dom";
import { Login } from "../main/public/login";

export const publicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
]);