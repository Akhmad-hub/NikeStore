import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./App/Store.js";

// digunakan untuk membuat notif seperti alert
import {  Toaster } from "react-hot-toast";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider  store={Store}>
      <Toaster position="top-center" reverseOrder={ false} />
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
