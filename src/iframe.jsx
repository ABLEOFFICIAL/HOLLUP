import React from "react";
import "./index.css";
import App from "./App.jsx";
import Create from "./components/createAcct/Create.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Create",
    element: <Create />,
  },
]);

const iframe = () => {
  return (
    <div className="h-[589px] w-[300px] border-[2px] border-neutral-500 rounded-[32px] m-auto mt-3 relative">
      <div className="h-full w-full border-[7px] border-black rounded-[30px] relative p-2">
        <div className="h-[15px] w-24 bg-black rounded-full flex justify-center items-start m-auto mb-2"></div>
        <div className="absolute h-5 w-[3px] bg-neutral-600 top-20 left-[-11px]"></div>
        <div className="absolute h-8 w-[3px] bg-neutral-600 top-32 left-[-11px]"></div>
        <div className="absolute h-8 w-[3px] bg-neutral-600 top-44 left-[-11px]"></div>
        <div className="absolute h-11 w-[3px] bg-neutral-600 top-[170px] right-[-11px] "></div>

        <div id="iframe-div" className="h-[95%] w-[98%] pb-2 overflow-hidden ">
          <RouterProvider router={router} />
        </div>

        <div className="h-[6px] w-32 bg-neutral-800 rounded-full flex justify-center items-end m-auto"></div>
      </div>
    </div>
  );
};

export default iframe;
