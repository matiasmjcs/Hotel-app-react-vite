import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { SignUp } from "../pages/SignUp";
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
          path: "/signup",
          element: <SignUp/>,
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
  