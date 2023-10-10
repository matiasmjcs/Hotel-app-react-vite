import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { SingUp } from "../pages/SingUp";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          index: true,
          element: <Home/>,
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
      ]
    },
   
  ]);
  