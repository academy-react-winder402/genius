import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { PersistGate } from "redux-persist/integration/react";

import { theme } from "./config";
import { router } from "./config/router";

import { persistor, store } from "./redux/store";

import { ToastContainer } from "./components/common/ToastContainer";

import "./assets/css/fonts.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
          <ToastContainer />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
