import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import { GlobalStyles } from "@mui/material";
import { globalStyles } from "@styles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles styles={globalStyles} />
    <RouterProvider router={router} />
  </React.StrictMode>
);
