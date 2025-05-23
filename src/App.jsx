import React from "react";
import "./index.css";
import PageX from "./components/pageX";
import StartUp from "./components/createAcct/StartUp";
import Create from "./components/createAcct/Create.jsx";
import PassKey from "./components/createAcct/passKey.jsx";
// import Profile from "./components/createAcct/profile.jsx";
import UserProfile from "./components/createAcct/UserProfile.jsx";
import Username from "./components/createAcct/Username.jsx";
import Notification from "./components/createAcct/Notification.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartUp />,
  },
  {
    path: "/Create",
    element: <Create />,
  },
  {
    path: "/PassKey",
    element: <PassKey />,
  },
  {
    path: "/UserProfile",
    element: <UserProfile />,
  },
  {
    path: "/Username",
    element: <Username />,
  },
  {
    path: "/Notification",
    element: <Notification />,
  },
]);

const App = () => {
  return (
    <div className="h-screen w-[98%] m-auto overflow-hidden px-5 py-10">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
