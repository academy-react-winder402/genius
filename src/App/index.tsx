import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { getItem } from "../core/services/common/storage.services";

import { persistor, store } from "../redux/store";

import { theme } from "../config";
import { authRoutes } from "../config/router/auth";
import { publicRoutes } from "../config/router/public.router";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const queryClient = new QueryClient();

  const isLoggedIn = getItem("token");

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={isLoggedIn ? authRoutes : publicRoutes} />
            <ToastContainer rtl />
          </ThemeProvider>
        </PersistGate>
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export { App };
