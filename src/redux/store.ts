import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import darkModeSlice from "./darkMode";
import registerSlice from "./register";
import isUserLoginSlice from "./user-login";

const darkModePersistConfig = {
  key: "root",
  storage,
};

const darkModePersistedReducer = persistReducer(
  darkModePersistConfig,
  darkModeSlice
);

const isUserLoginPersistConfig = {
  key: "root",
  storage,
};

const isUserLoginPersistedReducer = persistReducer(
  isUserLoginPersistConfig,
  isUserLoginSlice
);

export const store = configureStore({
  reducer: {
    darkMode: darkModePersistedReducer,
    register: registerSlice,
    isUserLogin: isUserLoginPersistedReducer,
  },
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: Posts, comments: CommentsState, users: UserState  }
export type AppDispatch = typeof store.dispatch;
