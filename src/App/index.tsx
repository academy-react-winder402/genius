import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../redux/store";

import { getItem } from "../core/services/common/storage.services";

import { theme } from "../config";
import { authRoutes } from "../config/router/auth";
import { publicRoutes } from "../config/router/public.router";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const isLoggedIn = getItem("token");

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={isLoggedIn ? authRoutes : publicRoutes} />
          <ToastContainer rtl />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export { App };
