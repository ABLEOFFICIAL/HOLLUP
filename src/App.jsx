import React from "react";
import "./index.css";
import PageX from "./components/pageX";
import StartUp from "./components/createAcct/StartUp";
import Create from "./components/createAcct/Create.jsx";
import PassKey from "./components/createAcct/passKey.jsx";
import Profile from "./components/createAcct/profile.jsx";
import Username from "./components/createAcct/Username.jsx";

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
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/Username",
    element: <Username />,
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
