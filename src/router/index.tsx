import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { SingUp } from "../pages/SingUp";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/singup",
      element: <SingUp/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/profile",
      element: <Profile/>,
    },
  ]);
  